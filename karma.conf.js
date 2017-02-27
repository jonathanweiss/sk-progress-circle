const path = require('path');
const fs = require('fs');
const browsers = require('./karma.browsers.js');
const webpackConfiguration = require('./webpack.config.js');

const args = process.argv.slice(2);
const isCI = args.length >= 2 && args[1] === '--ci';

if (isCI && !process.env.SAUCE_USERNAME) {
  if (!fs.existsSync('sauce.json')) {
    console.log('Create a sauce.json with your credentials based on the sauce-sample.json file.');
    process.exit(1);
  } else {
    process.env.SAUCE_USERNAME = require('./sauce').username;
    process.env.SAUCE_ACCESS_KEY = require('./sauce').accessKey;
  }
}

// Remove default entry point since we're using test-main.js instead
delete webpackConfiguration.entry;

// instrument only testing sources with Istanbul
webpackConfiguration.module.rules.push({
  test: /\.js$/,
  include: path.resolve('src/'),
  loader: 'istanbul-instrumenter-loader',
  query: {
    esModules: true,
  },
});

module.exports = function (config) {
  // Karma configuration
  let configuration = {
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
      stats: 'errors-only',
    },
  };

  if (process.env.TRAVIS) {
    configuration = Object.assign({}, configuration, {
      customLaunchers: browsers,
      browsers: Object.keys(browsers),
      retryLimit: 3,
      autoWatch: false,
      concurrency: 4,
    });
  }

  config.set(configuration);
};
