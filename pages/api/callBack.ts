import { NextApiRequest, NextApiResponse } from "next";
import getConfig from "next/config";

const {
  serverRuntimeConfig: { fetchUrl, projectId, callBackPath },
} = getConfig();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const url = `${fetchUrl}${callBackPath}`;
  const response = await fetch(url, {
    method: "POST",
    headers: { projectid: projectId, "Content-Type": "application/json" },
    body: req.body,
  });

  const data = await response.json()

  res.send(
    JSON.stringify(data)
  );
};
