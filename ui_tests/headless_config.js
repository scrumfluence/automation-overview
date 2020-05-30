
/* --------------------------------------------------
COMMAND: protractor ui_tests/headless_config.js
-------------------------------------------------- */

exports.config = {
  directConnect: true,
  specs: ['scripts/get_repositories.js'],
  capabilities: {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 1,
    chromeOptions: {
      args: ["--headless", "--disable-gpu", "--window-size=800x600"]
    }

  },
};