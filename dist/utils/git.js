'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downloadLocal = exports.download = exports.tagList = exports.repoList = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _rc = require('./rc');

var _downloadGitRepo = require('download-git-repo');

var _downloadGitRepo2 = _interopRequireDefault(_downloadGitRepo);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetch = function fetch(url) {
  return new _promise2.default(function (resolve, reject) {
    var config = {
      url: url,
      method: 'get',
      headers: {
        'user-agent': 'fff'
      }
    };
    (0, _request2.default)(config, function (err, response, body) {
      if (err) reject(err);
      resolve(JSON.parse(body));
    });
  });
};

var repoList = exports.repoList = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var config, api;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _rc.getAll)();

          case 2:
            config = _context.sent;
            api = 'https://api.github.com/' + config.type + '/' + config.registry + '/repos'; // https://api.github.com/users/ekesaitin/repos

            _context.next = 6;
            return fetch(api);

          case 6:
            return _context.abrupt('return', _context.sent);

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function repoList() {
    return _ref.apply(this, arguments);
  };
}();

var tagList = exports.tagList = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(repo) {
    var config, api;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _rc.getAll)();

          case 2:
            config = _context2.sent;
            api = 'https://api.github.com/repos/' + config.registry + '/' + repo + '/tags'; // https://api.github.com/repos/ekesaitin/ff-vuecli3/tags

            _context2.next = 6;
            return fetch(api);

          case 6:
            return _context2.abrupt('return', _context2.sent);

          case 7:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function tagList(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var download = exports.download = function download(src, dest) {
  return new _promise2.default(function (resolve, reject) {
    (0, _downloadGitRepo2.default)(src, dest, function (err) {
      if (err) reject(err);
      resolve();
    });
  });
};

var downloadLocal = exports.downloadLocal = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(project, version) {
    var config, api;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _rc.getAll)();

          case 2:
            config = _context3.sent;
            api = config.registry + '/' + project;

            if (version) {
              api += '#' + version;
            }
            _context3.next = 7;
            return download(api, process.cwd() + '/' + project);

          case 7:
            return _context3.abrupt('return', _context3.sent);

          case 8:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function downloadLocal(_x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}();