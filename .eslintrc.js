const path = require('path');

module.exports = {
  root: true,
  extends: 'ak-base',
  rules: {
      'max-len': [2, 180, 2, {
        ignoreUrls: true,
        ignoreComments: false
      }],
      'arrow-body-style': [0]
  },
};
