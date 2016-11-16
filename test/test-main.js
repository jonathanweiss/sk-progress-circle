// test/test_index.js

// require all modules ending in "_test" from the
// current directory and all subdirectories
const testsContext = require.context('./', false, /.+\.spec\.js$/);

testsContext.keys().forEach((path) => {
  try {
    testsContext(path);
  } catch (err) {
    console.error('[ERROR] WITH SPEC FILE: ', path, err); // eslint-disable-line
  }
});
