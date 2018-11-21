/*
    ./webpack.config.js
*/
const path = require('path');


const combineLoaders = require('webpack-combine-loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/client/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  mode: 'production',
  entry: {
    polyfill: ['babel-polyfill', 'whatwg-fetch'],
    index: './src/client/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
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
            options: {
              publicPath: 'assets/',
            },
          },
        ],
      },
    ],
  },
  optimization: {
    // minimize: false,
    // minimizer: [
    //   new UglifyJSPlugin({
    //     sourceMap: true,
    //     uglifyOptions: {
    //       compress: {
    //         inline: false,
    //       },
    //     },
    //   }),
    // ],
    splitChunks: {
      cacheGroups: {
        // vendor chunk
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|redux|prop-types)[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
        commons: {
          chunks: 'all',
          test: /node_modules/,
        },
      },
    },
  },
  plugins: [HtmlWebpackPluginConfig],
};
