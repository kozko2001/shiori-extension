module.exports = {
  entry: './src/popup.jsx',
  devtool: 'cheap-source-map',
  module: {
    rules: [
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
