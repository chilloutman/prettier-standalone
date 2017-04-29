module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    library: 'prettier-standalone',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [ 'env', { "targets": { "uglify": true } } ]
            ]
          }
        }
      }
    ]
  }
}
