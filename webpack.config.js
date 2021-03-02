module.exports = {
  entry: ['./client/index.js'],
  mode: 'development',
  output: {
    path: __dirname,
    filename: './server/public/bundle.js',
  },
  devtool: 'source-map',
  watchOptions: {
    ignored: /node_modules/,
  },
};
