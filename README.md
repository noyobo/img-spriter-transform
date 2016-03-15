# img-spriter-transfrom
converter img spriter meta datasource to style sheet(css)


## Eaample

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