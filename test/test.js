var transfrom = require('../index.js');

var fs = require('fs');
var path = require('path');
var test = require('ava');

var data = require('./data.js');
var retinaData = require('./data-retina.js');

var expectedCss;
var retinaExpectedCss;

test.before(t => {
  expectedCss =
    fs.readFileSync(path.join(__dirname, './sprite.css'))
    .toString();
  retinaExpectedCss =
    fs.readFileSync(path.join(__dirname, './sprite-retina.css'))
    .toString();
});

test('transfrom normal datasource', async t => {
  const css = transfrom(data);
  t.same(await css, expectedCss);
});


test('transfrom retina datasource', async t => {
  const css = transfrom(retinaData);
  t.same(await css, retinaExpectedCss);
});
