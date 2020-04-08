import path from 'path';

export default {
  // enable debuging information as we run our build
  debug: true,
  devtool: 'inline-source-map',
  // mean that webpack will display a list of all the files that it's bundling
  //noInfo: false,
  // define our app's entry point as src/index
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [],
  // need to tell webpack the file types that we want it to handle.
  module: {
    //loaders teach webpack how to handle different file types.
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
      { test: /\.css$/, loaders: ['style', 'css'] }
    ]
  }
}
