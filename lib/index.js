'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateEmailHostname = undefined;

var validateEmailHostname = exports.validateEmailHostname = function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(email) {
    var hostname;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (email) {
              _context.next = 2;
              break;
            }

            return _context.abrupt('return', false);

          case 2:
            if (!(typeof email !== 'string')) {
              _context.next = 4;
              break;
            }

            return _context.abrupt('return', false);

          case 4:
            hostname = email.split('@')[1];

            if (hostname) {
              _context.next = 7;
              break;
            }

            return _context.abrupt('return', false);

          case 7:
            _context.next = 9;
            return dnsResolve(hostname, 'MX');

          case 9:
            if (!_context.sent) {
              _context.next = 11;
              break;
            }

            return _context.abrupt('return', true);

          case 11:
            _context.next = 13;
            return dnsResolve(hostname, 'A');

          case 13:
            if (!_context.sent) {
              _context.next = 15;
              break;
            }

            return _context.abrupt('return', true);

          case 15:
            return _context.abrupt('return', false);

          case 16:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function validateEmailHostname(_x) {
    return ref.apply(this, arguments);
  };
}();

var _dns = require('dns');

var _dns2 = _interopRequireDefault(_dns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function dnsResolve(hostname, rrtype) {
  return new Promise(function (resolve) {
    _dns2.default.resolve(hostname, rrtype, function (err, result) {
      resolve(err ? undefined : result);
    });
  });
}

exports.default = validateEmailHostname;
