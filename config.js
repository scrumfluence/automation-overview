exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['scripts/get_repositories.js'],
  capabilities: {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 1      
  },
};