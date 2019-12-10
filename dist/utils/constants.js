'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _package = require('../../package');

Object.defineProperty(exports, 'VERSION', {
  enumerable: true,
  get: function get() {
    return _package.version;
  }
});


// 找到用户的根目录
var HOME = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'];

// 配置文件
var RC = exports.RC = HOME + '/.ffclirc';

// RC配置下载（模板）的地方，给GitHub的api用
var DEFAULTS = exports.DEFAULTS = {
  registry: 'ekesaitin',
  type: 'users'

  // 下载目录
};var DOWNLOAD = exports.DOWNLOAD = HOME + '/.template';