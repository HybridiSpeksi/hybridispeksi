/**
 * Webpack config for development environment
 * @author pyry
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const combineLoaders = require('webpack-combine-loaders');

module.exports = {
  mode: 'development',
  entry: {
    polyfill: 'babel-polyfill',
    index: './src/client/index.js',
    fetch_polyfill: 'whatwg-fetch',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.css$/,
        loader: combineLoaders([
          {
            loader: 'style-loader',
          },
          {
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
          },
        ],
      },
    ],
  },
  devtool: 'source-map',
  devServer: {
    port: 3000,
    historyApiFallback: true,
    inline: true,
    proxy: {
      '/api/**': 'http://localhost:8080',
      secure: false,
      changeOrigin: true,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
  ],
};
