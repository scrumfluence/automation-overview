
/* --------------------------------------------------
COMMAND: node api_tests/run.js
Note: "testName" must be changed to the target test.
-------------------------------------------------- */

const testName = 'server_test.js';
const Mocha = require('mocha');
const mocha = new Mocha();
const path = require('path');
const root = path.parse(path.resolve(__dirname)).dir;
mocha.addFile(path.join(root, 'api_tests', 'scripts', testName));
mocha.run();
