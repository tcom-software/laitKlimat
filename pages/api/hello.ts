// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (_req: any, res: any) => {
  const mysql = require("mysql");

  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    // password: "yourpassword",
    database: "xolodleto",
    multipleStatements: true,
  });
  connection.connect();

  await connection.query("SELECT * FROM tovari WHERE tovar_gigopt_url = 'EcoStar-KVS-F09HT.1'", function (
    err: any,
    results: any
  ) {
    if (err) {
      // throw err;
    }

    res.send({ data: results });
  });

  connection.end();
};
