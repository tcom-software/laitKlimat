import { UPLOADS_URL } from "constants/api";
import { makePriceView } from "utils/makePriceView";
import { getProductImage } from "./getProductImage";

export const makeProductName = (data: any = {}) =>
  `${data.brand} ${data.series_name || ""}-${data.model}`;

export const makeBrandLogo = (
  baseUrl: string,
  logoNAme: string,
  size?: string
) => `${baseUrl}/manufacturer_logo/${size ?? "size150"}/${logoNAme}`;

export const makeProductPhoto = (uploadsUrl: string, photo: any) => {
  return typeof photo === "object"
    ? `${uploadsUrl}/${
        photo.folder === "product_series0" ? "product_series" : "products"
      }/${photo.folder}/size800/${photo.file_name}.${photo.file_format}`
    : "";
};

export const serializeProductCardData = (data: any) => {
  const {
    id,
    price,
    brand,
    has_sale,
    warranty,
    has_chat,
    available,
    brand_logo,
    setup_price,
    chat_with_percent,
    chat_without_percent,
    characteristics: charts,
    price_with_setup: priceWithSetup,
    price_without_setup: priceWithoutSetup,
  } = data;

  const productName = makeProductName(data);
  const brandLogo = makeBrandLogo(UPLOADS_URL as string, brand_logo);
  const productImageX300PathName = getProductImage(data);
  const productImageX300 = `${UPLOADS_URL}/${productImageX300PathName}`;

  const characteristic = [
    {
      key: "Гарантия на кондиционер (при заказе с установкой)",
      value: warranty + " лет",
    },
    {
      key: "Стоимость установки",
      value:
        setup_price && makePriceView(setup_price, { unit: "₽", split: " " }),
    },
    { key: "Доставка в пределах МКАД", value: "бесплатно" },
    {
      key: "В кредит от",
      value: makePriceView((price / 24) | 0, { unit: "₽", split: " " }),
    },
  ];

  if (charts) {
    characteristic.splice(1, 0, {
      key: charts.characteristic_name_ru,
      value: charts.characteristic_attribute_name,
    });
  }

  let hasSale = 0;

  if (has_sale) {
    if (has_chat) {
      if (priceWithSetup && priceWithoutSetup) {
        hasSale = 1;
      }
    } else if (chat_with_percent) {
      hasSale = 2;
    } else if (chat_without_percent) {
      hasSale = 3;
    }
  }

  // serialized data
  const serializedProductData = {
    brand,
    price,
    hasSale,
    brandLogo,
    available,
    productName,
    articule: id,
    characteristic,
    priceWithSetup,
    productImageX300,
    priceWithoutSetup,
    formatedPrice: makePriceView(price, { unit: "₽", split: " " }),
  };

  return serializedProductData;
};

export const serializeProductData = (data: any) => {
  const {
    product: {
      price,
      market,
      articule,
      setup_price,
      category_id,
      description,
      manufacturer_logo,

      has_chat,
      has_sale,
      available,
      chat_with_percent,
      chat_without_percent,
      price_with_setup: priceWithSetup,
      price_without_setup: priceWithoutSetup,
      warranty,
    },
    characteristics,
    certificate,
    photos,
    filter,
  } = data;

  const productName = makeProductName(data.product);
  const productImage = makeProductPhoto(UPLOADS_URL as string, photos[0]);
  const certificateImage =
    certificate?.certificate_file_name &&
    `${UPLOADS_URL}/manufacturer_certificate/size300/${certificate?.certificate_file_name}`;
  const brandLogo = makeBrandLogo(UPLOADS_URL as string, manufacturer_logo);
  const formattedPrice = makePriceView(price, { unit: "₽", split: " " });
  const creditFrom = makePriceView((price / 24) | 0, { unit: "₽", split: " " });
  const formattedSetupPrice = makePriceView(setup_price, {
    unit: "₽",
    split: " ",
  });

  const serializedCharacteristics = [] as any[];

  for (const el of characteristics) {
    let found = serializedCharacteristics.find(
      ({ title }: any) => title === el.title
    );
    if (!found) {
      found = { title: el.title, table: {} };
      serializedCharacteristics.push(found);
    }
    found.table[el.characteristic_name] =
      el.characteristic_value || el.characteristic_attribute_name;
  }

  let hasSale = 0;

  if (has_sale) {
    if (has_chat) {
      if (priceWithSetup && priceWithoutSetup) {
        hasSale = 1;
      }
    } else if (chat_with_percent) {
      hasSale = 2;
    } else if (chat_without_percent) {
      hasSale = 3;
    }
  }

  // serialized data
  const serializedProductData = {
    productName,
    leftSide: {
      brandLogo,
      productImage,
      certificateImage,
      price,
      hasSale,
      priceWithSetup,
      priceWithoutSetup,
      categoryId: category_id,
    },
    characteristics: {
      description,
      characteristics: serializedCharacteristics,
    },
    infoTable: {
      filter,
      creditFrom,
      table: {
        head: [
          {
            key: {
              type: "text",
              value: {
                tag: "h2",
                sz: "normal",
                clr: "secondary",
                text: "Лучшая цена на рынке",
              },
              colSpan: 2,
            },
            value: null,
          },
        ],
        body: [
          {
            key: {
              type: "text",
              value: {
                tag: "span",
                sz: "normal",
                clr: "primary",
                text: "Цена",
              },
            },
            value: {
              type: "text",
              value: {
                tag: "span",
                sz: "larg",
                clr: "tercary",
                text: formattedPrice,
              },
            },
            className: "price",
          },
          {
            key: {
              type: "text",
              value: {
                tag: "span",
                sz: "normal",
                clr: "primary",
                text: `Артикул: ${articule}`,
              },
            },
            value: null,
            className: "articule",
          },
          {
            key: {
              type: "text",
              value: {
                tag: "span",
                sz: "normal",
                clr: "primary",
                text: `Товар${
                  market ? "" : " не"
                } выставлен на Маркете <br /> ${
                  available ? "Есть в наличии" : "Под заказ"
                }`,
              },
            },
            value: {
              type: "image",
              value: {
                path: "/images/product/market",
                type: "png",
              },
            },
            className: `market ${available ? "active" : "noactive"}`,
          },
          {
            key: {
              type: "text",
              value: {
                tag: "span",
                sz: "normal",
                clr: "primary",
                text: "Стоимость установки",
              },
            },
            value: {
              type: "text",
              value: {
                tag: "span",
                sz: "normal",
                clr: "tercary",
                text: formattedSetupPrice,
              },
            },
            notRender: !setup_price,
          },
          {
            key: {
              type: "text",
              value: {
                tag: "span",
                sz: "normal",
                clr: "primary",
                text: "Доставка в пределах МКАД",
              },
            },
            value: {
              type: "text",
              value: {
                tag: "span",
                sz: "normal",
                clr: "tercary",
                text: productName
                  .toLowerCase()
                  .includes("MITSUBISHI HEAVY".toLowerCase())
                  ? "1000 ₽"
                  : "бесплатно",
              },
            },
          },
          {
            key: {
              type: "text",
              value: {
                tag: "span",
                sz: "normal",
                clr: "primary",
                text: "Заказ от 40 000 руб. 3% предоплата",
              },
            },
            value: null,
          },
          {
            key: {
              type: "text",
              colSpan: 2,
              value: {
                tag: "span",
                sz: "larg",
                clr: "secondary",
                text: `При заказе с установкой, ${warranty} лет гарантии на кондиционер`,
              },
            },
            value: null,
          },
        ],
        footer: [
          {
            key: {
              type: "text",
              value: {
                tag: "h4",
                sz: "normal",
                clr: "secondary",
                text: "Антибактериальный фильтр в подарок",
              },
            },
            value: {
              type: "image",
              value: {
                path: "/images/product/gift",
                type: "png",
              },
            },
          },
        ],
      },
    },
  };

  return serializedProductData;
};

export const serializeProductCardDataFromFullProduct = (data: any) => {
  const {
    product: {
      brand,
      price,
      articule,
      available,
      setup_price,
      manufacturer_logo,
    },
    photos,
  } = data;

  const productImage = makeProductPhoto(UPLOADS_URL as string, photos[0]);
  const productName = makeProductName(data.product);
  const brandLogo = makeBrandLogo(UPLOADS_URL as string, manufacturer_logo);
  const formatedPrice = makePriceView(price, { unit: "₽", split: " " });

  const characteristic = [
    {
      key: "Стоимость установки",
      value:
        setup_price && makePriceView(setup_price, { unit: "₽", split: " " }),
    },
    { key: "Доставка в пределах МКАД", value: "бесплатно" },
    {
      key: "В кредит от",
      value: makePriceView((price / 24) | 0, { unit: "₽", split: " " }),
    },
  ];

  // serialized data
  const serializedProductData = {
    brand,
    brandLogo,
    productName,
    productImage,
    characteristic,
    articule,
    formatedPrice,
    price,
    available,
  };

  return serializedProductData;
};
