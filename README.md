# img-spriter-transfrom

[![npm version](http://img.shields.io/npm/v/img-spriter-transfrom.svg)](https://www.npmjs.org/package/img-spriter-transfrom) 
[![npm download](http://img.shields.io/npm/dm/img-spriter-transfrom.svg)](https://www.npmjs.org/package/img-spriter-transfrom) 
[![npm engines](http://img.shields.io/node/v/img-spriter-transfrom.svg)](https://www.npmjs.org/package/img-spriter-transfrom) 
[![build status](http://img.shields.io/travis/noyobo/img-spriter-transfrom.svg)](https://travis-ci.org/noyobo/img-spriter-transfrom) 
[![Coverage Status](https://img.shields.io/coveralls/noyobo/img-spriter-transfrom.svg)](https://coveralls.io/r/noyobo/img-spriter-transfrom) 
[![npm dependencise](https://david-dm.org/noyobo/img-spriter-transfrom.svg)](https://david-dm.org/noyobo/img-spriter-transfrom)

converter img spriter meta datasource to style sheet(css)

## Example

```js
var transfrom = require('img-spriter-transfrom');

transfrom(data)
  .then(function(css) {
    console.log(css);
    fs.writeFile(path.join(__dirname, './sprite.css'), css);
  }).catch(err => {
    console.log(err);
  })

```

> data see : https://raw.githubusercontent.com/noyobo/img-spriter-transfrom/master/test/data.js

> generator by https://github.com/noyobo/img-spriter 