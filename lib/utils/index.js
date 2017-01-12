"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {};

var diffObject = exports.diffObject = function diffObject(a, b) {
  return Object.keys(a).reduce(function (map, k) {
    if (a[k] !== b[k]) map[k] = b[k]; // eslint-disable-line no-param-reassign
    return map;
  }, {});
};