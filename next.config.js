const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");

module.exports = {
  target: "serverless",
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
};
