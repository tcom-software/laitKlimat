import { NextApiRequest, NextApiResponse } from "next";
import getConfig from "next/config";

const {
  serverRuntimeConfig: { fetchUrl, projectId, getReviewPath },
} = getConfig();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { page } = JSON.parse(req.body);

  const url = `${fetchUrl}${getReviewPath}?page=${page || 1}`;
  const response = await fetch(url, {
    method: "GET",
    headers: { projectId },
  });

  const data = await response.json();

  res.send(data);
};
