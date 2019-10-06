const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
               {
                 loader: "css-loader",
               },
               {
                 loader: "postcss-loader"
               },
               {
                 loader: "sass-loader",
                 options: {
                   implementation: require("sass")
                 }
               }
             ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
               {
                 loader: "file-loader",
                 options: {
                   outputPath: 'images'
                 }
               }
             ]
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
               {
                 loader: "file-loader",
                 options: {
                   outputPath: 'fonts'
                 }
               }
             ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};