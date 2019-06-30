const path = require("path");

module.exports = {
  entry: path.join(__dirname, "/src", "index.js"),
  module: {
    rules: [
      {
        // this is so that we can compile any React,
        // ES6 and above into normal ES5 syntax
        test: /\.(js|jsx)$/,
        // we do not want anything from node_modules to be compiled
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      // Even though the file-loader isn't requried right now, it's there
      //  in case we need it in the future
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        loaders: ["file-loader"]
      },
      {
        test: /favicon\.ico$/,
        loader: "url",
        query: {
          limit: 1,
          name: "[name].[ext]"
        }
      }
    ]
  }
};
