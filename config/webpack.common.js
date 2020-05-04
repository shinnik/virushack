const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const dotenv = require('dotenv');

const env = dotenv.config().parsed;

// reduce it to a nice object, the same as before
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

const ROOT_DIRECTORY = path.join(__dirname, '..');

module.exports = {
  entry: [path.resolve(__dirname, '../src/index.jsx')],
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      { test: /\.(svg|png|jpg|ico)$/, exclude: /node_modules/, use: ['file-loader'] }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.png', '.svg', '.css', '.scss']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(ROOT_DIRECTORY, 'public/index.html'),
      filename: 'index.html',
      favicon: './public/favicon.ico'
    }),
    new CopyWebpackPlugin([
      { from: path.join(ROOT_DIRECTORY, 'public'), to: path.join(ROOT_DIRECTORY, 'build/public') }
    ]),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: 'app.css' }),
    new webpack.DefinePlugin(envKeys),
    new webpack.HashedModuleIdsPlugin()
  ]
};
