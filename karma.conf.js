const path = require('path');

const webpackConfiguration = require('./webpack.config.js');

// Remove default entry point since we're using test-main.js instead
delete webpackConfiguration.entry;

// instrument only testing sources with Istanbul
webpackConfiguration.module.postLoaders = [{
  test: /\.js$/,
  include: path.resolve('src/'),
  loader: 'istanbul-instrumenter',
  query: {
    esModules: true,
  },
}];

module.exports = function (config) {
  // Karma configuration
  const configuration = {
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

    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox'],
      },
    },

    logLevel: config.LOG_WARN,
    autoWatch: true,
    singleRun: false,
    colors: true,

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      stats: 'errors-only',
    },
  };

  if (process.env.TRAVIS) {
    configuration.browsers = ['Chrome_travis_ci'];
  }

  config.set(configuration);
};
