import path from 'path';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { Configuration } from 'webpack';

const config: Configuration = {
  name: 'number-baseball-dev',
  mode: 'development', // production
  devtool: 'eval', // hidden-source-map
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
  },
  entry: {
    app: './client',
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        options: { plugins: ['react-refresh/babel'] },
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: path.join(__dirname, 'node_modules'),
      },
    ],
  },
  plugins: [new ReactRefreshPlugin(), new ForkTsCheckerWebpackPlugin()],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist',
  },
  devServer: {
    devMiddleware: { publicPath: '/dist' },
    static: { directory: path.resolve(__dirname) },
    hot: true,
  },
};
export default config;

// 배포떄 핫로딩 뺴기
// import path from 'path';
// import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
// import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
// import { Configuration } from 'webpack';

// const config: Configuration = {
//   name: 'number-baseball-dev',
//   mode: 'production', // production
//   devtool: 'hidden-source-map', // hidden-source-map
//   resolve: {
//     extensions: ['.js', '.jsx', '.tsx', '.ts'],
//   },
//   entry: {
//     app: './client',
//   },
//   module: {
//     rules: [
//       {
//         loader: 'babel-loader',
//         options: {  },
//       },
//       {
//         test: /\.tsx?$/,
//         loader: 'ts-loader',
//         exclude: path.join(__dirname, 'node_modules'),
//       },
//     ],
//   },
//   plugins: [ new ForkTsCheckerWebpackPlugin()],
//   output: {
//     path: path.join(__dirname, 'dist'),
//     filename: '[name].js',
//     publicPath: '/dist',
//   },
//   devServer: {
//     devMiddleware: { publicPath: '/dist' },
//     static: { directory: path.resolve(__dirname) },
//     hot: true,
//   },
// };
// export default config;
