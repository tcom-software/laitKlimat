import { NextApiRequest, NextApiResponse } from "next";
import getConfig from "next/config";

const {
  serverRuntimeConfig: { fetchUrl, projectId, searchPath },
} = getConfig();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { search, page } = JSON.parse(req.body);

  const searchData = {
    payload: {},
  };

  try {
    const url = `${fetchUrl}${searchPath}?page=${page || 1}`;
    const response = await fetch(url, {
      method: "POST",
      headers: { projectId, "Content-Type": "application/json" },
      body: JSON.stringify({ search }),
    });
    searchData.payload = await response.json();
  } catch (error) {
    console.log(error);
  }

  res.send(searchData);
};
