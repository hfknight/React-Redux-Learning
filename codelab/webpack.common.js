const path = require("path");

// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  // plugins: [
  //   new CleanWebpackPlugin(['dist']),
  //   new HtmlWebpackPlugin({
  //     title: 'Production'
  //   })
  // ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    // rules: [
    //   {
    //     test: /\.css$/,
    //     use: ["style-loader", "css-loader!autoprefixer-loader"],
    //     include: __dirname + '/style'
    //   }
    // ],
    loaders: [
      {
        test: /\.css$/,
        loader:'style!css!'
        // loaders: ['style-loader', 'css-loader!autoprefixer-loader'],
        // include: __dirname + '/src'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ["react", "es2015", "stage-1"]
        }
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
};
