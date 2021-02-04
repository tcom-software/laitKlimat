const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const path = require("path");

module.exports = {
  target: "serverless",
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  serverRuntimeConfig: {
    projectId: "59",
    // fetchUrl: "https://back.laitklimat.ru/",
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
    getServicesPath: "api/getServices",
  },
  publicRuntimeConfig: {
    staticFolder: "",
    uploadsUrl: "https://back.laitklimat.ru/uploads/",
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new DuplicatePackageCheckerPlugin());
    config.resolve.alias["fast-deep-equal"] = path.resolve(
      __dirname,
      "node_modules",
      "fast-deep-equal"
    );
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
