
/* --------------------------------------------------
COMMAND: protractor ui_tests/config.js
-------------------------------------------------- */

exports.config = {
  directConnect: true,
  specs: ['scripts/get_repositories.js'],
  capabilities: {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 1

  },
};