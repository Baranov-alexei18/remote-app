const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: 'https://remote-app-roan.vercel.app/',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,  
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
new ModuleFederationPlugin({
  name: "remote_app",
  filename: "remoteEntry.js",
  remotes: {
    host_app: `promise new Promise(resolve => {
      resolve(window.host_app);
    })`
  },
  exposes: {
    './PageRemote': './src/components/PageRemote',
  },
}),
        new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    historyApiFallback: true,
    static: './dist',
    hot: true,
    port: 3001,
    open: true,
  },
};
