const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const port = process.env.PORT || 3000

module.exports = {
  mode: 'development',
  entry: ['react-hot-loader/patch', './src/index.js'],
  output: {
    filename: 'app.[hash].js',
    publicPath: '/'
  },
  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },

      {
        test: /\.scss$/,
        exclude: [/node_modules/],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename: 'app.css',
      disable: process.env.NODE_ENV !== 'production'
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ],

  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true,
    hot: true
  }
}
