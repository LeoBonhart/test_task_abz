const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: './js/[name].js',
    chunkFilename: './js/[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('./css/[name].css'),
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    //contentBase: helpers.root('src'),
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
      ignored: helpers.root('node_modules')
    }
  }
});
