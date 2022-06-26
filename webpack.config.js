const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

const { resolve } = require("path");
const { ok } = require("assert");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },

  output: {
    path: resolve(__dirname, "/dist/"),
    filename: "[name].js",
  },

  devServer: {
    client: {
      overlay: true,
    },
    static: {
      directory: "./dist",
      publicPath: "/static",
    },
    port: 3000,
    liveReload: true,
    compress: true,
    // historyApiFallback: true,
    // open: true,
    historyApiFallback: {
      rewrites: [
        { from: /^\//, to: "http://localhost:3000/index.html" },
        { from: /^\/main&/, to: "http://localhost:3000/index.html" },
        {
          from: /^\/challenge\/*/,
          // to: "http://localhost:3000/index.html",
          to: "http://localhost:3000/index.html",
          htmlAcceptHeaders: ["text/html", "*/*"],
        },
        { from: /./, to: "/404/404.html" },
      ],
    },
    // devMiddleware: (app) => {
    //   app.get("/challenge/*", (req, res) => {
    //     res.sendFile(__dirname + "/dist/index.html");
    //   });
    // },
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html", // output file name
      template: "./index.html", // template file name
    }),
    new MiniCssExtractPlugin({ filename: "app.css" }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ["dist"],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
