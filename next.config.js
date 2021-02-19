const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const path = require("path");

module.exports = {
  target: "serverless",
  optimization: {
    minimizer: [new UglifyJsPlugin()],
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
