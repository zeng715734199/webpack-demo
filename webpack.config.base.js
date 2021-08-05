const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
 
module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'hello',
    template: './assets/test.html'
  }),
],
};