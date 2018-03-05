module.exports = {
  entry: './src/popup.js',
  devtool: 'cheap-source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules(?!\/react-calendar-timeline)/,
        loader: 'babel-loader',
      },
      {
        test: /\.(s)?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
  output: {
    filename: 'popup.js',
  },
};
