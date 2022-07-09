const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname, "../../dist/client"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      },
      {
        test: /\.html$/i,
        exclude: /(node_modules)/,
        loader: "html-loader",
        options: {
          sources: false
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/index.html"
    })
  ],
  resolve: {
    modules: ["node_modules"],
    extensions: [".js"]
  }
}
