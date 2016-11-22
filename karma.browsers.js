module.exports = {
  // Chrome
  chrome_canary_osx: {
    browserName: 'chrome',
    platform: 'OS X 10.11',
    version: 'dev',
    base: 'SauceLabs',
  },

  chrome_latest_osx: {
    browserName: 'chrome',
    platform: 'OS X 10.11',
    version: 'latest',
    base: 'SauceLabs',
  },

  // Firefox
  firefox_latest_osx: {
    browserName: 'firefox',
    platform: 'OS X 10.11',
    version: 'latest',
    base: 'SauceLabs',
  },

  safari_latest: {
    browserName: 'safari',
    platform: 'OS X 10.11',
    version: 'latest',
    base: 'SauceLabs',
  },

  // IE
  internet_explorer_11: {
    browserName: 'internet explorer',
    platform: 'Windows 10',
    version: '11',
    base: 'SauceLabs',
  },

  // Edge
  microsoftedge_latest: {
    browserName: 'microsoftedge',
    platform: 'Windows 10',
    version: 'latest',
    base: 'SauceLabs',
  },
};
