const path = require('path');
const fs = require('fs');

function checkObject(data) {
  let allFine = true;
  for (let key of Object.keys(data)) {
    if (data[key].startsWith('^')) {
      console.log(`The version of ${key} is not fixed (${data[key]})`);
      allFine = false;
    }
  }
  return allFine;
}

function checkVersions() {
  const cwd = path.resolve('./');
  const content = fs.readFileSync(`${cwd}/package.json`);
  const jsonContent = JSON.parse(content);
  let allFine = true;
  if (!jsonContent.dependencies) {
    console.log('No dependencies found')
  } else {
    if (!checkObject(jsonContent.dependencies)) {
      allFine = false;
    }
  }
  if (!jsonContent.devDependencies) {
    console.log('No devDependencies found')
  } else {
    if (!checkObject(jsonContent.devDependencies)) {
      allFine = false;
    }
  }
  return allFine;
}

module.exports.checkVersions = checkVersions;
