import path from 'path'

export default {
  entry: './es6_src/entry.js',
  output: {
    path: path.join(__dirname, 'es6_dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'es6_dist'),
  }
}
