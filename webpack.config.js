const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: 'auto',
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
      name: "remoteApp",
      filename: "remoteEntry.js",
      remotes: {
        hostApp: "host_app@https://host-app-xois.vercel.app/remoteEntry.js",
      },
      exposes: {
        './RemotePage': './src/components/RemotePage',
  },
        shared: {
    react: {
      singleton: true,
      eager: false,
      requiredVersion: '^18.2.0', // версия из твоего package.json
    },
    'react-dom': {
      singleton: true,
      eager: false,
      requiredVersion: '^18.2.0',
    },
  },
    }),

    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    static: './dist',
    hot: true,
    port: 3000,
    open: true,
  },
};
