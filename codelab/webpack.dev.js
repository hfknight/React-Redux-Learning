const merge = require("webpack-merge");
const common = require("./webpack.common.js");
module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true, //cannot get url refresh error fix
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
