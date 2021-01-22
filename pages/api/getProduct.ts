import { NextApiRequest, NextApiResponse } from "next";
import getConfig from "next/config";

const {
  serverRuntimeConfig: { fetchUrl, /*projectId*/ productPath, projectId },
} = getConfig();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { productId } = JSON.parse(req.body);

  const url = `${fetchUrl}${productPath}${productId}`;
  const response = await fetch(url, {
    method: "GET",
    headers: { projectId },
  });
  const product = await response.json();

  res.send(product);
};
