const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "notes.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "/build"),
    compress: true,
    port: 3001,
    watchContentBase: true,
    progress: true
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/", "index.html"),
      favicon: path.resolve(__dirname, "./public/", "favicon.ico")
    })
  ]
});
