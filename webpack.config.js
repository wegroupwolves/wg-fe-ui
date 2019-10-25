const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: ['babel-loader'],
      },
      {
        test: /stories\.(js|jsx)?$/,
        loaders: [require.resolve('@storybook/source-loader')],
        enforce: 'pre',
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'assets/[name].[ext]',
          },
        },
      },
      // {
      //   test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: 'svg-inline-loader',
      // },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: {
    react: 'commonjs react',
  },
  // plugins: [new CopyPlugin([{ from: 'src' }])],
  devtool: 'source-map',
};
