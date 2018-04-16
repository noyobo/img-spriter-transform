# img-spriter-transform

[![Greenkeeper badge](https://badges.greenkeeper.io/noyobo/img-spriter-transform.svg)](https://greenkeeper.io/)

[![npm version](http://img.shields.io/npm/v/img-spriter-transform.svg)](https://www.npmjs.org/package/img-spriter-transform) 
[![npm download](http://img.shields.io/npm/dm/img-spriter-transform.svg)](https://www.npmjs.org/package/img-spriter-transform) 
[![npm engines](http://img.shields.io/node/v/img-spriter-transform.svg)](https://www.npmjs.org/package/img-spriter-transform) 
[![build status](http://img.shields.io/travis/noyobo/img-spriter-transform.svg)](https://travis-ci.org/noyobo/img-spriter-transform) 
[![Coverage Status](https://img.shields.io/coveralls/noyobo/img-spriter-transform.svg)](https://coveralls.io/r/noyobo/img-spriter-transform) 
[![npm dependencise](https://david-dm.org/noyobo/img-spriter-transform.svg)](https://david-dm.org/noyobo/img-spriter-transform)

converter img spriter meta datasource to style sheet(css)

## Example

```js
var transform = require('img-spriter-transform');

transform(data)
  .then(function(css) {
    console.log(css);
    fs.writeFile(path.join(__dirname, './sprite.css'), css);
  }).catch(err => {
    console.log(err);
  })

```

> data see : https://raw.githubusercontent.com/noyobo/img-spriter-transform/master/test/data.js

> generator by https://github.com/noyobo/img-spriter 