'use strict';

var _chai = require('chai');

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

describe('validateEmailHostname', function () {
  it('should return false for undefined, null, empty or non string', _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = _chai.assert;
            _context.next = 3;
            return (0, _2.default)();

          case 3:
            _context.t1 = _context.sent;

            _context.t0.isFalse.call(_context.t0, _context.t1);

            _context.t2 = _chai.assert;
            _context.next = 8;
            return (0, _2.default)(null);

          case 8:
            _context.t3 = _context.sent;

            _context.t2.isFalse.call(_context.t2, _context.t3);

            _context.t4 = _chai.assert;
            _context.next = 13;
            return (0, _2.default)('');

          case 13:
            _context.t5 = _context.sent;

            _context.t4.isFalse.call(_context.t4, _context.t5);

            _context.t6 = _chai.assert;
            _context.next = 18;
            return (0, _2.default)(123);

          case 18:
            _context.t7 = _context.sent;

            _context.t6.isFalse.call(_context.t6, _context.t7);

          case 20:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  })));

  it('should return false if the hostname part is missing', _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.t0 = _chai.assert;
            _context2.next = 3;
            return (0, _2.default)('nobody');

          case 3:
            _context2.t1 = _context2.sent;

            _context2.t0.isFalse.call(_context2.t0, _context2.t1);

          case 5:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  })));

  it('should return true for a valid email', _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.t0 = _chai.assert;
            _context3.next = 3;
            return (0, _2.default)('steve@apple.com');

          case 3:
            _context3.t1 = _context3.sent;

            _context3.t0.isTrue.call(_context3.t0, _context3.t1);

          case 5:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  })));

  it('should return false for a fake email', _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.t0 = _chai.assert;
            _context4.next = 3;
            return (0, _2.default)('nobody@ynvhunb87cjd.fr');

          case 3:
            _context4.t1 = _context4.sent;

            _context4.t0.isFalse.call(_context4.t0, _context4.t1);

          case 5:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  })));
});
