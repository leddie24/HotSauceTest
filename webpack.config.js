var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "js"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./app.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']}
      }
    ]
  },
  output: {
    path: __dirname + "/dist/scripts/",
    filename: "client.min.js"
  }
};
