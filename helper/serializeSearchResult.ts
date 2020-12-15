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

  for (let el of data) {
    const { brand, series_name, price, model, id } = el;
    const name = `${brand} ${series_name}-${model}`;
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
