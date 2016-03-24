var transfrom = require('../index.js');

var data = require('./data-retina.js');
var fs = require('fs');
var path = require('path');
var assert = require('assert');

var expectedCss =
  fs.readFileSync(path.join(__dirname, './sprite-retina.css'))
  .toString();

transfrom(data)
  .then(css => {
    assert.equal(css, expectedCss, 'good job');
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });
