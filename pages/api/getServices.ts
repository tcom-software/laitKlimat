import { NextApiRequest, NextApiResponse } from "next";
import getConfig from "next/config";

const {
  serverRuntimeConfig: { fetchUrl, projectId, getServicesPath },
} = getConfig();

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const url = `${fetchUrl}${getServicesPath}`;
  const response = await fetch(url, {
    method: "GET",
    headers: { projectId },
  });

  const data = await response.json();

  res.send(data);
};
