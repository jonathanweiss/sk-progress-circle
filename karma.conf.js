let webpackConfiguration = require('./webpack.config.js');

delete webpackConfiguration.entry;

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

    webpack: webpackConfiguration,

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
    },
  });
};
