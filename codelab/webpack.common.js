const path = require("path");

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  plugins: [
    new CleanWebpackPlugin('dist', {} ),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: "./src/index.html",
      filename: "index.html"
    }),
    new WebpackMd5Hash(),
    new ExtractTextPlugin({
      filename: 'css-styles.[hash].css',
      disable: false,
      allChunks: true
    })
  ],
  output: {
    filename: "[name].bundle.[chunkhash].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/react"],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  resolve: {
    // modules: [path.resolve(__dirname, 'node_modules')],
    extensions: [".js", ".jsx", ".json", ".scss", ".less", ".css"]
    // unsafeCache: true,
    // alias: {
    //     'react': path.resolve(__dirname, 'node_modules/react/cjs/react.development.js'),
    //     'react-dom': path.resolve(__dirname, 'node_modules/react-dom/cjs/react-dom.development.js')
    // }
  }
};
