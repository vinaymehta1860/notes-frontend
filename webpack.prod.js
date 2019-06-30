const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "notes-[contentHash].js"
  },
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "./public/", "index.html"),
        favicon: path.resolve(__dirname, "./public/", "favicon.ico")
      })
    ]
  },
  plugins: [new CleanWebpackPlugin()]
});
