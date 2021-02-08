import getConfig from "next/config";
import { makePriceView } from "utils/makePriceView";
import { getProductImageX300 } from "./getProductImageX300";

const {
  publicRuntimeConfig: { uploadsUrl },
} = getConfig();

const getProductPhoto = (photo: any) => {
  return photo
    ? `${uploadsUrl}${
        photo.folder === "product_series0" ? "product_series" : "products"
      }/${photo.folder}/size800/${photo.file_name}.${photo.file_format}`
    : "";
};

export const serializeProductCardData = (data: any) => {
  const {
    id,
    price,
    brand,
    series_name,
    model,
    brand_logo,

    setup_price,
    characteristics: chtrs,

    has_sale,
    has_chat,
    available,
    chat_with_percent,
    chat_without_percent,
    price_with_setup: priceWithSetup,
    price_without_setup: priceWithoutSetup,
  } = data;

  const productImageX300PathName = getProductImageX300(data);
  const productName = `${brand} ${series_name || ""}-${model}`;
  const productImageX300 = `${uploadsUrl}${productImageX300PathName}`;
  const brandLogo = `${uploadsUrl}manufacturer_logo/size150/${brand_logo}`;

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

  if (chtrs) {
    characteristic.unshift({
      key: chtrs.characteristic_name_ru,
      value: chtrs.characteristic_attribute_name,
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
      articule,
      category_id,
      brand,
      description,
      market,
      model,
      price,
      series_name,
      setup_price,
      manufacturer_logo,

      has_chat,
      has_sale,
      available,
      chat_with_percent,
      chat_without_percent,
      price_with_setup: priceWithSetup,
      price_without_setup: priceWithoutSetup,
    },
    characteristics,
    certificate,
    photos,
    filter,
  } = data;

  const productName = `${brand} ${series_name || ""}-${model}`;
  const productImage = getProductPhoto(photos[0]);
  const certificateImage = `${uploadsUrl}manufacturer_certificate/size300/${certificate?.certificate_file_name}`;
  const brandLogo = `${uploadsUrl}manufacturer_logo/size150/${manufacturer_logo}`;
  const formatedPrice = makePriceView(price, { unit: "₽", split: " " });
  const creditFrom = makePriceView((price / 24) | 0, { unit: "₽", split: " " });
  const formatedSetupPrice = makePriceView(setup_price, {
    unit: "₽",
    split: " ",
  });

  const serializedCharacteristics = [] as any[];

  for (const el of characteristics) {
    let finded = serializedCharacteristics.find(
      ({ title }: any) => title === el.title
    );
    if (!finded) {
      finded = { title: el.title, table: {} };
      serializedCharacteristics.push(finded);
    }
    finded.table[el.characteristic_name] =
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
                text: formatedPrice,
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
                text: formatedSetupPrice,
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
      articule,
      brand,
      manufacturer_logo,
      model,
      price,
      series_name,
      setup_price,
      available,
    },
    photos,
  } = data;

  const productImage = getProductPhoto(photos[0]);
  const productName = `${brand} ${series_name || ""}-${model}`;
  const brandLogo = `${uploadsUrl}manufacturer_logo/size150/${manufacturer_logo}`;
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
