const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  mode: 'development',
  entry: { main: './src/javascript/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/images"
            }
          }
        ]
      },
      {
        test: /.(woff|woff2|ttf|otf|eot)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/fonts"
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('main.css')
  ]
};