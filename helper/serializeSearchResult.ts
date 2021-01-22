import { getProductImageX300 } from "./getProductImageX300";
import { makePriceView } from "utils/makePriceView";
import getConfig from "next/config";

const {
  publicRuntimeConfig: { uploadsUrl },
} = getConfig();

export type SearchData = {
  name: string;
  image: string;
  price: string;
  id: string;
};

export const serializeSearchResult = (data: any): SearchData[] => {
  const serializedData = [];

  // cover_photo: "[{"cover_photo": 0, "series_picture_folder": "product_series0", "series_picture_file_name": "7e7f97295b0ebe8246f7668c9900df49", "series_picture_format": "jpg"}]"

  for (let el of data) {
    const { brand, series_name, price, model, id } = el;
    const name = `${brand} ${series_name || ""}-${model}`;
    const imagePath = getProductImageX300(el);
    const image = `${uploadsUrl}${imagePath}`;
    serializedData.push({
      name,
      image,
      price: makePriceView(price, { unit: "₽", split: " " }),
      id,
    });
  }

  return serializedData;
};
