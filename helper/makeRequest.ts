import { NextApiRequest, NextApiResponse } from "next";

export const makeRequest = async (
  projectId: string,
  url: string,
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const response = await fetch(url, {
    method: "POST",
    headers: { projectId, "Content-Type": "application/json" },
    body: req.body,
  });

  const data = await response.json();

  res.send(JSON.stringify(data));
};
