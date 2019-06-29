'use strict';

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _constants = require('./utils/constants');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actionMap = {
  install: {
    alias: 'i',
    description: 'install ff-cli template',
    examples: ['ff-cli install', 'ff-cli i']
  },
  config: {
    alias: 'c',
    description: 'config .ffclirc',
    examples: ['ff-cli config set <k> <v>', 'ff-cli config get <k>', 'ff-cli config remove <k>']
  },
  '*': {
    description: 'not found',
    examples: []
  }
};

(0, _entries2.default)(actionMap).forEach(function (v) {
  var _v = (0, _slicedToArray3.default)(v, 2),
      action = _v[0],
      obj = _v[1];

  _commander2.default.command(action).description(obj.description).alias(obj.alias).action(function () {
    if (action === 'config') {
      _index2.default.apply(undefined, [action].concat((0, _toConsumableArray3.default)(process.argv.slice(3))));
    } else if (action === 'install') {
      (0, _index2.default)(action);
    }
  });
});

function help() {
  console.log('\r\n' + 'commands config:');
  (0, _entries2.default)(actionMap).forEach(function (v) {
    var _v2 = (0, _slicedToArray3.default)(v, 2),
        obj = _v2[1];

    obj.examples.forEach(function (ex) {
      console.log('   - ' + ex);
    });
  });
}

_commander2.default.on('-h', help);
_commander2.default.on('--help', help);

_commander2.default.version(_constants.VERSION, '-v --version').parse(process.argv);