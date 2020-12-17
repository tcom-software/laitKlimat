import { makeRequest } from "helper/makeRequest";
import { NextApiRequest, NextApiResponse } from "next";
import getConfig from "next/config";

const {
  serverRuntimeConfig: { fetchUrl, projectId, checkoutPath },
} = getConfig();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const url = `${fetchUrl}${checkoutPath}`;
  await makeRequest(projectId, url, req, res);
};
