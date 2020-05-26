/* eslint-disable filenames/match-regex, import/no-commonjs */

const path = require('path');
const context = path.resolve(__dirname, 'src');

module.exports = {
  context,
  entry: './index.js',
  module: {
    rules: [
      {
        include: path.resolve(__dirname, './src'),
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: "[path]___[name]__[local]___[hash:base64:5]",
              },
              sourceMap: true,
              importLoaders: 1,
              onlyLocals: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
        test: /\.scss$/,
      },
      {
        include: path.resolve(__dirname, './src'),
        loader: 'babel-loader',
        test: /\.js$/
      }
    ],
  },
  output: {
    filename: '[name].js'
  },
  stats: 'minimal'
};
