import getConfig from "next/config";
import { makePriceView } from "utils/makePriceView";
import { getProductImageX300 } from "./getProductImageX300";

const {
  publicRuntimeConfig: { uploadsUrl },
} = getConfig();

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
  } = data;

  const productImageX300PathName = getProductImageX300(data);
  const productName = `${brand} ${series_name}-${model}`;
  const productImageX300 = `${uploadsUrl}${productImageX300PathName}`;
  const brandLogo = `${uploadsUrl}brands/${brand_logo}`;

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

  // serialized data
  const serializedProductData = {
    brand,
    brandLogo,
    productName,
    productImageX300,
    characteristic,
    articule: id,
    formatedPrice: makePriceView(price, { unit: "₽", split: " " }),
    price,
  };

  return serializedProductData;
};

export const serializeProductData = (data: any) => {
  // const {
  //   id,
  //   price,
  //   brand,
  //   series_name,
  //   model,
  //   brand_logo,
  //   product_picture_folder,
  //   product_picture_file_name,
  //   product_picture_format,

  //   series_picture_folder,
  //   series_picture_file_name,
  //   series_picture_format,

  //   setup_price,
  //   characteristics: chtrs,
  // } = data;

  // articule: 2626;
  // brand: "IGC";
  // certificate_file_format: "jpg";
  // certificate_file_name: "6ebb4e03744c954e231493a4b697ce47";
  // certificate_folder: "manufacturer_certificate0";
  // description: null;
  // manufacturer_logo: "IGC.png";
  // market: 1;
  // model: "IWF-1200T22S";
  // price: 70920;
  // series_id: 646;
  // series_name: "IWF-STANDART";
  // setup_price: 0;

  const {
    product: {
      articule,
      brand,
      certificate_file_format,
      certificate_file_name,
      certificate_folder,
      description,
      manufacturer_logo,
      market,
      model,
      price,
      series_name,
      setup_price,
    },
    characteristics,
    photos: [{ folder, file_name, file_format }],
  } = data;

  const productName = `${brand} ${series_name}-${model}`;
  const productImage = `${uploadsUrl}${
    folder === "product_series0" ? "product_series" : "products"
  }/${folder}/size800/${file_name}.${file_format}`;
  const certificateImage = `${uploadsUrl}manufacturer_certificate/${certificate_folder}/${certificate_file_name}.${certificate_file_format}`;
  const brandLogo = `${uploadsUrl}brands/${manufacturer_logo}`;
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

  // serialized data
  const serializedProductData = {
    productName,
    leftSide: {
      productImage,
      brandLogo,
      certificateImage,
    },
    characteristics: {
      description,
      characteristics: serializedCharacteristics,
    },
    infoTable: {
      creditFrom,
      table: {
        head: [
          {
            key: {
              type: "text",
              value: {
                tag: "h4",
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
                text: "цена",
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
                text: "Товар выставлен на Маркете <br /> Есть в наличии",
              },
            },
            value: {
              type: "image",
              value: {
                path: "/images/product/market",
                type: "png",
              },
            },
            className: `market ${market ? "active" : "noactive"}`,
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
                text: "бесплатно",
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
