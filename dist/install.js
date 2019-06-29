'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _git = require('./utils/git');

var _ora = require('ora');

var _ora2 = _interopRequireDefault(_ora);

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _rc = require('./utils/rc');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var loading, list, answer, project, tag;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _rc.init)();

        case 2:
          // 获取项目名
          loading = (0, _ora2.default)('获取模板中...');

          loading.start();
          _context.next = 6;
          return (0, _git.repoList)();

        case 6:
          list = _context.sent;

          loading.succeed();
          list = list.map(function (_ref2) {
            var name = _ref2.name;
            return name;
          });
          _context.next = 11;
          return _inquirer2.default.prompt([{
            type: 'list',
            name: 'project',
            choices: list,
            questions: 'choice template'
          }]);

        case 11:
          answer = _context.sent;
          project = answer.project; // 项目名

          // 获取版本号

          loading = (0, _ora2.default)('获取版本号中...');
          loading.start();
          _context.next = 17;
          return (0, _git.tagList)(project);

        case 17:
          list = _context.sent;

          loading.succeed();
          tag = '';

          if (!(list.length > 0)) {
            _context.next = 26;
            break;
          }

          list = list.map(function (_ref3) {
            var name = _ref3.name;
            return name;
          });
          _context.next = 24;
          return _inquirer2.default.prompt([{
            type: 'list',
            name: 'tag',
            choices: list,
            questions: 'choice tag'
          }]);

        case 24:
          answer = _context.sent;

          tag = answer.tag;

        case 26:
          // 下载
          loading = (0, _ora2.default)('少女祈祷中...');
          loading.start();
          _context.next = 30;
          return (0, _git.downloadLocal)(project, tag);

        case 30:
          loading.succeed();

        case 31:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined);
}));