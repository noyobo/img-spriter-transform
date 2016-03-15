var transfrom = require('../index.js');

var data = require('./data-retina.js');
var fs = require('fs');
var path = require('path');

transfrom(data)
  .then(function(css) {
    console.log(css);
    fs.writeFile(path.join(__dirname, './sprite-retina.css'), css);
  })
  .catch(err => {
    console.log(err);
  })