"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactFinalForm = require("react-final-form");

var _objectDiff = _interopRequireDefault(require("object-diff"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AutoSave =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AutoSave, _React$Component);

  function AutoSave(props) {
    var _this;

    _classCallCheck(this, AutoSave);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AutoSave).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "save",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var _this$props, values, save, difference;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!_this.promise) {
                _context.next = 3;
                break;
              }

              _context.next = 3;
              return _this.promise;

            case 3:
              _this$props = _this.props, values = _this$props.values, save = _this$props.save; // This diff step is totally optional

              difference = (0, _objectDiff.default)(_this.state.values, values);

              if (!Object.keys(difference).length) {
                _context.next = 12;
                break;
              }

              // values have changed
              _this.setState({
                submitting: true,
                values: values
              });

              _this.promise = save(difference);
              _context.next = 10;
              return _this.promise;

            case 10:
              delete _this.promise;

              _this.setState({
                submitting: false
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _this.state = {
      values: props.values,
      submitting: false
    };
    return _this;
  }

  _createClass(AutoSave, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps() {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }

      this.timeout = setTimeout(this.save, this.props.debounce);
    }
  }, {
    key: "render",
    value: function render() {
      // This component doesn't have to render anything, but it can render
      // submitting state.
      return this.state.submitting && _react.default.createElement("div", {
        className: "submitting"
      }, "Submitting...");
    }
  }]);

  return AutoSave;
}(_react.default.Component); // Make a HOC
// This is not the only way to accomplish auto-save, but it does let us:
// - Use built-in React lifecycle methods to listen for changes
// - Maintain state of when we are submitting
// - Render a message when submitting
// - Pass in debounce and save props nicely


var _default = function _default(props) {
  return _react.default.createElement(_reactFinalForm.FormSpy, _extends({}, props, {
    subscription: {
      values: true
    },
    component: AutoSave
  }));
};

exports.default = _default;