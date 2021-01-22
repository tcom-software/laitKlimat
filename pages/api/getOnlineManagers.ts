import { NextApiRequest, NextApiResponse } from "next";

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const url = `https://zovani.ru/getOnlineManagers`;
  const response = await fetch(url, {
    method: "GET",
  });

  const data = await response.json();

  res.send(data);
};
