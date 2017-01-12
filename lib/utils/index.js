"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.diffObject = diffObject;
function diffObject(a, b) {
  return Object.keys(a).reduce(function (map, k) {
    if (a[k] !== b[k]) map[k] = b[k];
    return map;
  }, {});
}