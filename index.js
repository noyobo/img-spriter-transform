'use strict';
var fs = require('fs');
var path = require('path');
var swig = require('swig');
var CleanCSS = require('clean-css');

var pkg = require('./package.json');
var normalSprite = require('./lib/sprite.js');
var normalSpriteRetina = require('./lib/sprite-retina.js');


var has = Object.prototype.hasOwnProperty;

function isEmpty(val) {
  if (null == val) return true;
  if ('boolean' == typeof val) return false;
  if ('number' == typeof val) return 0 === val;
  if (undefined !== val.length) return 0 === val.length;
  for (var key in val) {
    if (has.call(val, key)) return false;
  }
  return true;
}

module.exports = function(dataSource) {
  return new Promise(function(resolve, reject) {
    if (isEmpty(dataSource)) {
      reject('dataSource is empty');
    }
    if (isEmpty(dataSource.frames)) {
      reject('dataSource.frames is empty');
    }
    if (isEmpty(dataSource.meta)) {
      reject('dataSource.meta is empty');
    }
    if (typeof dataSource.meta.dpi === 'undefined') {
      dataSource.meta.dpi = 1;
    }
    if (typeof dataSource.meta.dpi !== 'number' || dataSource.meta.dpi < 1) {
      reject('dataSource.meta.dpi must a number, and more than or equal to 1');
    }
    if (!dataSource.meta.sprite_path) {
      reject('dataSource.meta.sprite_path is image url, it required')
    }

    var swigTemplate;

    if (dataSource.meta.dpi > 1) {
      swigTemplate = swig.compile(normalSpriteRetina);
    } else {
      swigTemplate = swig.compile(normalSprite);
    }

    dataSource.pkg = pkg
    try {
      var style = swigTemplate(dataSource);
      // style = new CleanCSS().minify(style).styles;
      resolve(style)
    } catch (err) {
      reject(err);
    }
  })
};
