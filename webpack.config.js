/*
    ./webpack.config.js
*/
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ExtractTextPluginConfig = new ExtractTextPlugin('styles.css');
const combineLoaders = require('webpack-combine-loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: ['./client/index.js', 'whatwg-fetch'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: 'eslint-loader',
      //   options: {
      //     // eslint options (if necessary)
      //   },
      // },
      {
        test: /\.css$/,
        loader: combineLoaders([
          {
            loader: 'style-loader',
          }, {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
        ]),
      },
      {
        test: /\.(png|jpg|gif|otf|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              // path: path.resolve(__dirname, '.. ', 'assets'),
              publicPath: 'assets/',
            },
          },
        ],
      },
    ],
  },
  devtool: 'source-map',
  devServer: {
    port: 3000,
    historyApiFallback: true,
    hot: true,
    inline: true,
    // contentBase: path.resolve(__dirname, 'assets'),
    proxy: {
      '/api/**': 'http://localhost:3001',
      secure: false,
      changeOrigin: true,
    },
  },
  plugins: [
    ExtractTextPluginConfig,
    HtmlWebpackPluginConfig,
  ],
};
