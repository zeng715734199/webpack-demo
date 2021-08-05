const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const base = require('./webpack.config.base');
 
module.exports = {
  ...base,
  mode: 'production',
  plugins: [
    ...base.plugins,
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
    chunkFilename: '[name].[contenthash].css',
    ignoreOrder: false,
  })
],
module: {
  rules: [
     {
      test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader, "css-loader"],
     },
   ],
  },
};