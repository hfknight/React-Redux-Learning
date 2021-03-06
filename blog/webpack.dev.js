const merge = require("webpack-merge");
const common = require("./webpack.common.js");
module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    port: 3000,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    open: true,
    openPage: '/' 
  }
});
