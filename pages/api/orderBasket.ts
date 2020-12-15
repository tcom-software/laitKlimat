import { NextApiRequest, NextApiResponse } from "next";
import getConfig from "next/config";

const {
  serverRuntimeConfig: { fetchUrl, projectId, checkoutPath },
} = getConfig();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const url = `${fetchUrl}${checkoutPath}`;
  const reponse = await fetch(url, {
    method: "POST",
    headers: { projectId, "Content-Type": "application/json" },
    body: req.body,
  });

  const data = await reponse.json();

  res.send(JSON.stringify(data));
};
