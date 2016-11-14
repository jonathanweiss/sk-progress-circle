const webpackConfig = require('./webpack.config.js');

module.exports = (config) => {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],

    reporters: ['progress'],
    port: 9876,
    colors: false,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    autoWatchBatchDelay: 300,

    files: [
      './src/**/*.js',
      './node_modules/skatejs/dist/index.min.js',
      './node_modules/skatejs-web-components/dist/index-with-deps.min.js'],

    preprocessors: {
      'src/**/*.js': ['webpack'],
      'test/**/*.js': ['webpack'],
    },

    plugins: [
      'karma-babel-preprocessor',
      'karma-mocha',
      'karma-webpack',
      'karma-chai',
      'karma-chrome-launcher',
    ],

    webpack: {
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
          },
          {
            test: /\.less$/,
            loader: 'css!less',
          },
        ],
      },
    },

    webpackMiddleware: {
      noInfo: true,
    },
  });
};
