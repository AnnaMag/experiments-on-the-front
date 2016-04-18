module.exports = {
  devtool: "eval-source-map",
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/',
    publicPath: "/"
  },
  devServer: {
    contentBase: "public/"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: __dirname + "/src/",
        loader: "babel-loader"
      }
    ]
  }
}
