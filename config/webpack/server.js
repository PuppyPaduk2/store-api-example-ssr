const path = require("path");
const NodemonPlugin = require("nodemon-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./src/server/index.ts",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  target: "node",
  externals: [nodeExternals()],
  output: {
    filename: "index.js",
    path: path.resolve(process.cwd(), "dist/server"),
  },
  plugins: [new NodemonPlugin()],
};
