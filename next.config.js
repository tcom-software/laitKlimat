const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// const path = require("path");

module.exports = {
  target: "serverless",
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  serverRuntimeConfig: {
    projectId: "59",
    fetchUrl: "http://projects-backend.ru/",
    categoryPath: "api/getCategories",
    productsPath: "api/getProducts/",
    productPath: "api/getProduct/",
    filterPath: "api/getFilterData/",
    searchPath: "api/searchProduct/",
  },
  publicRuntimeConfig: {
    staticFolder: "",
    uploadsUrl: "http://projects-backend.ru/public/uploads/",
  },
  // env: {
  //   MYSQL_HOST: "127.0.0.1",
  //   MYSQL_PORT: "3306",
  //   MYSQL_DATABASE: "root_crm",
  //   MYSQL_USER: "root",
  //   // MYSQL_PASSWORD: { user_password },
  // },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
        net: "empty",
        tls: "empty",
      };
    }

    return config;
  },
};
