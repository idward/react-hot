const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  target: "web",
  entry: ["./src/index.js"],
  devtool: "eval-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 3000,
    compress: true,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html")
    })
  ]
};
