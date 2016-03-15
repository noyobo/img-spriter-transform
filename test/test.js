var transfrom = require('../index.js');

var data = require('./data.js');
var fs = require('fs');
var path = require('path');


transfrom(data)
  .then(function(css) {
    console.log(css);
    fs.writeFile(path.join(__dirname, './sprite.css'), css);
  }).catch(err => {
    console.log(err);
  })
