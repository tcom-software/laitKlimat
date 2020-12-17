import { NextApiRequest, NextApiResponse } from "next";
import getConfig from "next/config";

const {
  serverRuntimeConfig: { fetchUrl, projectId, addReviewPath },
} = getConfig();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const url = `${fetchUrl}${addReviewPath}`;
  console.log(req.body);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      // accept: "application/json, text/plain, */*",
      projectId,
    },
    body: req.body,
  });

  const data = await response.json();
  console.log(data);

  res.send(JSON.stringify(data));
};

