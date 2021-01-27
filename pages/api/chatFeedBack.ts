import { NextApiRequest, NextApiResponse } from "next";
import getConfig from "next/config";

const {
  serverRuntimeConfig: { fetchUrl, /*projectId*/ projectId },
} = getConfig();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const url = `${fetchUrl}api/chatFeedBack`;
  const response = await fetch(url, {
    method: "POST",
    headers: { projectId, "Content-Type": "application/json" },
    body: req.body,
  });
  const data = await response.json();

  res.send(data);
};
