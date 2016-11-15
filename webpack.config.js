/* global __dirname */

const path = require('path');

const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const dirSrc = path.resolve(__dirname, 'src');
const dirTest = path.resolve(__dirname, 'test');
const dirBuild = path.resolve(__dirname, 'build');
const dirDemo = path.resolve(__dirname, 'demo');

module.exports = {
  entry: [
    path.resolve(dirSrc, 'index.js'),
    'webpack-dev-server/client?http://127.0.0.1:4000',
    'webpack/hot/only-dev-server',
  ],
  output: {
    path: dirBuild,
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: dirBuild,
    historyApiFallback: true,
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: dirSrc,
      },
      {
        loader: 'babel-loader',
        test: dirTest,
      },
      {
        test: /\.less$/,
        loader: 'css!less',
      },
    ],
  },
  plugins: [
    // Simply copies the files over
    new CopyWebpackPlugin([
        { from: dirDemo }, // to: output.path
    ]),
    // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin(),
  ],
  stats: {
    // Nice colored output
    colors: true,
  },

  // Create Sourcemaps for the bundle
  devtool: 'source-map',
};
