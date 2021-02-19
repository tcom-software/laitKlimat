import { getProductImage } from "./getProductImage";
import { makePriceView } from "utils/makePriceView";
import { UPLOADS_URL } from "constants/api";

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
    const name = `${brand} ${series_name || ""}-${model}`;
    const imagePath = getProductImage(el);
    const image = `${UPLOADS_URL}/${imagePath}`;
    serializedData.push({
      name,
      image,
      price: makePriceView(price, { unit: "₽", split: " " }),
      id,
    });
  }

  return serializedData;
};
