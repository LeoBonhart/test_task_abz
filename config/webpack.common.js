const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const helpers = require('./helpers');
const webpackMerge = require('webpack-merge');
// modules
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const font = require('./webpack/font');
const html = require('./webpack/html');
const image = require('./webpack/image');
const json = require('./webpack/json');
const typescript = require('./webpack/typescript');

module.exports = webpackMerge(
  {
    entry: {
      'polyfills': './src/polyfills.ts',
      'vendor': './src/vendor.ts',
      'app': './src/main.ts'
    },  
    resolve: {
      extensions: ['.ts', '.js'],
      alias:{
        images: helpers.root('src','assets','images'),
        sass: helpers.root('src','assets','sass'),
        css: helpers.root('src','assets','css'),
        fonts: helpers.root('src','assets','fonts'),
        shared: helpers.root('src','app','shared')
      }
    },
    plugins: [
      // Workaround for angular/angular#11580
      new webpack.ContextReplacementPlugin(
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        /angular(\\|\/)core(\\|\/)@angular/,
        helpers.root('./src'), // location of your src
        {} // a map of your routes
      ),
  
      new webpack.optimize.CommonsChunkPlugin({
        name: ['app', 'vendor', 'polyfills']
      }),
  
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      })
    ]
  },
  typescript(),
  html(),
  image(),
  font(),
  css(),
  sass(),
  json()
);