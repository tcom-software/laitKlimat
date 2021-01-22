const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  target: "serverless",
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  serverRuntimeConfig: {
    projectId: "59",
    // fetchUrl: "http://back.laitklimat.ru/",
    fetchUrl: "http://back.projects-backend.ru/",
    categoryPath: "api/getCategories",
    productsPath: "api/getProducts/",
    productPath: "api/getProduct/",
    filterPath: "api/getFilterData/",
    searchPath: "api/searchProduct",
    callBackPath: "api/oneClickOrder",
    checkoutPath: "api/checkout",
    getReviewsPath: "api/getReviews",
    addReviewPath: "api/review",
  },
  publicRuntimeConfig: {
    staticFolder: "",
    uploadsUrl: "https://back.xolodnoeleto.ru/uploads/",
  },
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
