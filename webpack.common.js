const path = require('path');
const fs = require('fs');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    App: ['@babel/polyfill', './assets/src/components/App/App'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'assets'),
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          },
          {
            loader: 'eslint-loader',
            options: {
              cache: true,
              emitWarning: true,
              configFile: path.resolve(__dirname, './.eslintrc.json')
            }
          }
        ]
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'assets'),
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', {
          loader: 'less-loader',
          options: {
            modifyVars: themeVariables,
            javascriptEnabled: true,
          },
        }]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
            },
          },
        ],
      },
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      'utils': path.resolve(__dirname, './assets/src/utils/utils.js')
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "CAS Student Petition Portal",
      filename: 'index.html',
      hash: true,
      template: 'assets/default_inject_index.html',
      inject: true,
      'meta': {
        'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
        'charset': 'utf-8',
        'X-UA-Compatible': "IE=edge",
        'cache-control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '-1'
      }
    }),
    new webpack.ProvidePlugin({
      'utils': 'utils'
    }),
  ]
}