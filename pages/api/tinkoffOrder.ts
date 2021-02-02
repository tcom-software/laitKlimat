import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const formBody = req.body;

  console.log(formBody);

  const response = await fetch(
    "https://loans.tinkoff.ru/api/partners/v1/lightweight/create",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: formBody,
    }
  );

  //   console.log({ response, url: response.url });

  res.send({ redirectUrl: response.url });
};
