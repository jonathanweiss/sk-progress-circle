const path = require('path');

const webpackConfiguration = require('./webpack.config.js');

delete webpackConfiguration.entry;
webpackConfiguration.module.postLoaders = [
  // instrument only testing sources with Istanbul
  {
    test: /\.js$/,
    include: path.resolve('src/'),
    loader: 'istanbul-instrumenter',
    query: {
      esModules: true,
    },
  },
];

// Karma configuration
module.exports = function (config) {
  config.set({

    files: [
      // only specify one entry point
      // and require all tests in there
      'test/test-main.js',
    ],

    preprocessors: {
      // add webpack as preprocessor
      'test/test-main.js': ['webpack'],
    },

    frameworks: ['mocha'],

    reporters: ['mocha', 'coverage'],
    coverageReporter: {
      reporters: [
        { type: 'text' },
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
      ],
    },
    istanbulReporter: {
    },
    webpack: webpackConfiguration,

    logLevel: config.LOG_WARN,
    autoWatch: true,
    singleRun: false,
    colors: true,

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      stats: 'errors-only',
    },
  });
};
