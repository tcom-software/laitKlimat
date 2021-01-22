import { NextApiRequest, NextApiResponse } from "next";
import getConfig from "next/config";

const {
  serverRuntimeConfig: { fetchUrl, projectId, productPath },
} = getConfig();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const productIds = JSON.parse(req.body);

  const products = [];
  for await (const productId of productIds) {
    const url = `${fetchUrl}${productPath}${productId}`;
    const response = await fetch(url, {
      method: "GET",
      headers: { projectId },
    });
    const product = await response.json();
    products.push(product);
  }

  res.send(products);
};
