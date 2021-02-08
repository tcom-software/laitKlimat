import { NextApiRequest, NextApiResponse } from "next";
import getConfig from "next/config";

const {
  serverRuntimeConfig: { /*fetchUrl, projectId*/ filterPath },
} = getConfig();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { categoryId } = JSON.parse(req.body);
  const filtersData = {
    categoryId,
    payload: {},
  };

  const url = `"https://back.laitklimat.ru/"${filterPath}${categoryId}`;
  const response = await fetch(url, {
    method: "GET",
    headers: { projectId: "59" },
  });
  filtersData.payload = await response.json();

  res.send(filtersData);
};
