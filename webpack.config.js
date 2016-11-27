const webpack = require( 'webpack' )

module.exports = {
  entry: './main.js',
  output: {
    path: './dist',
    filename: 'bundle.js',
    libraryTarget: 'umd',
    library: 'vue-online'
  },
  resolve: {
    extensions: [ '', '.js', '.vue' ]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  babel: {
      presets: ['es2015', 'stage-2'],
      plugins: ['transform-runtime']
  }
}
