const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
  main: './src/index.js'
  },
  devServer: {
    contentBase: './dist',
    open: true,
    port: 9000,
    hot: true,
    // hotOnly: true
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader',
      }, {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              importLoaders: 2,
              modules: true
            }
          },
          'css-loader',
          'postcss-loader'
        ]
      }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }), 
    new CleanWebpackPlugin(),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}