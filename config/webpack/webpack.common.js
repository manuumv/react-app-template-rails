const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const basePath = `${__dirname}/../..`;

module.exports = {
  context: path.join(basePath, 'src'),
  resolve: {
    alias: {
      common: path.join(basePath, 'src/common'),
      core: path.join(basePath, 'src/core'),
      actions: path.join(basePath, 'src/actions'),
      assets: path.join(basePath, 'src/assets'),
      reducers: path.join(basePath, 'src/reducers'),
      model: path.join(basePath, 'src/model'),
      containers: path.join(basePath, 'src/containers'),
      store: path.join(basePath, 'src/store'),
      styles: path.join(basePath, 'src/styles'),
    },
    extensions: ['.js', '.ts', '.tsx']
  },
  entry: ['./index.tsx'],
  output: {
    path: path.join(basePath, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html', //Name of file in ./dist/
      template: 'index.html', //Name of template in ./src
      hash: true
    }),
  ]
};
