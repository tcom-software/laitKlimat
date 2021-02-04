import { NextApiRequest, NextApiResponse } from "next";
import getConfig from "next/config";

const {
  serverRuntimeConfig: { fetchUrl, /*projectId*/ productsPath, projectId },
} = getConfig();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { category, page, body } = JSON.parse(req.body);

  // console.log('post', JSON.stringify(body), body)

  const filters = `${category}?page=${page || 1}`;
  const url = `${fetchUrl}${productsPath}${filters}`;
  const response = await fetch(url, {
    method: "POST",
    headers: { projectId, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const {
    products: _products,
    products_info: { characteristics, ...restInfo },
  } = await response.json();

  for (const characteristic of characteristics) {
    const product = _products.find(({ id }: any) => id === characteristic.id);
    product.characteristics = characteristic;
  }

  const products = { products: _products, products_info: restInfo };

  res.send(products);
};
