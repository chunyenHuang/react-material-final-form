"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactFinalForm = require("react-final-form");

var _finalFormArrays = _interopRequireDefault(require("final-form-arrays"));

var _finalFormSetFieldData = _interopRequireDefault(require("final-form-set-field-data"));

var _core = require("@material-ui/core");

var _FormFields = require("./FormFields");

require("./DetailForm.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DetailForm =
/*#__PURE__*/
function (_Component) {
  _inherits(DetailForm, _Component);

  function DetailForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DetailForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DetailForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {});

    _defineProperty(_assertThisInitialized(_this), "renderNestedForm", function (renderProps) {
      var _this$props = _this.props,
          metadata = _this$props.metadata,
          debug = _this$props.debug,
          _this$props$submitBut = _this$props.submitButtonText,
          submitButtonText = _this$props$submitBut === void 0 ? 'Save' : _this$props$submitBut;
      var title = _this.props.title || _this.props.metadata.title || 'Form';
      var pristine = renderProps.pristine,
          submitting = renderProps.submitting,
          invalid = renderProps.invalid,
          values = renderProps.values;
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_core.Typography, {
        variant: "h5"
      }, title), _react.default.createElement("hr", null), metadata.fields.map(function (field, index) {
        return _react.default.createElement(_core.Grid, {
          item: true,
          xs: 12,
          key: index,
          className: "form-field-container"
        }, (0, _FormFields.renderFormField)(field));
      }), _react.default.createElement(_core.Grid, {
        container: true,
        alignItems: "flex-start",
        spacing: 8,
        style: {
          'marginTop': '20px'
        }
      }, _react.default.createElement(_core.Grid, {
        item: true,
        xs: 6,
        align: "left"
      }), _react.default.createElement(_core.Grid, {
        item: true,
        xs: 6,
        align: "right"
      }, _react.default.createElement(_core.Button, {
        variant: "contained",
        color: "primary",
        type: "submit",
        disabled: submitting || invalid || pristine
      }, submitButtonText))), debug && _react.default.createElement("pre", null, JSON.stringify(values || {}, 0, 2)));
    });

    return _this;
  }

  _createClass(DetailForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          nested = _this$props2.nested,
          loading = _this$props2.loading,
          onSubmit = _this$props2.onSubmit,
          data = _this$props2.data,
          metadata = _this$props2.metadata,
          renderProps = _this$props2.renderProps;
      var title = this.props.title || this.props.metadata.title || 'Form';
      return _react.default.createElement("div", {
        className: "react-material-final-form"
      }, loading && _react.default.createElement(_core.Grid, {
        item: true,
        xs: 12,
        align: "center"
      }, _react.default.createElement(_core.CircularProgress, null)), metadata && nested && renderProps && this.renderNestedForm(renderProps), metadata && !nested && title && _react.default.createElement(_reactFinalForm.Form, {
        onSubmit: onSubmit,
        mutators: _objectSpread({
          setFieldData: _finalFormSetFieldData.default
        }, _finalFormArrays.default),
        initialValues: data,
        render: function render(props) {
          return _react.default.createElement("form", {
            onSubmit: props.handleSubmit
          }, _this2.renderNestedForm(props));
        }
      }));
    }
  }]);

  return DetailForm;
}(_react.Component);

exports.default = DetailForm;