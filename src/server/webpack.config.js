const path = require("path");

module.exports = {
  mode: "production",
  target: "node",
  entry: "./app/server.js",
  output: {
    path: path.resolve(__dirname, "../../dist/server"),
    filename: 'server.js',
    libraryTarget: 'commonjs'
  }
};
