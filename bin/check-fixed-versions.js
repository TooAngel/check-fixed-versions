const checker = require('../src/index.js');


if (!checker.checkVersions()) {
  process.exit(1)
}
