"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var bq = exports.bq = function bq(absPath) {
  var module = require(absPath);

  if (module.default) {
    return module.default;
  }
  return module;
};