"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _DetailForm = _interopRequireDefault(require("./DetailForm.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// eslint-disable-line no-unused-vars
// eslint-disable-line no-unused-vars
var metadata = {
  title: 'My form',
  fields: [{
    key: 'text',
    type: 'string',
    label: 'Text'
  }, {
    key: 'textarea',
    type: 'string',
    label: 'Text Area',
    formType: 'textarea'
  }, {
    key: 'phone',
    type: 'string',
    label: 'Phone',
    formType: 'phone'
  }, {
    key: 'number',
    type: 'number',
    label: 'Number'
  }, {
    key: 'date',
    type: 'string',
    label: 'Date',
    formType: 'date'
  }, {
    key: 'dateTime',
    type: 'string',
    label: 'Date Time',
    formType: 'datetime'
  }, {
    key: 'disabledField',
    type: 'string',
    label: 'Disabled Field',
    isDisabled: true
  }]
};
var data = {
  text: 'Value',
  textarea: "abc\n123\nabc",
  phone: '(123) 123-1231',
  number: 1024,
  date: '2019-02-01',
  dateTime: '2019-01-21T12:59:01',
  disabledField: 'Disabled'
};

function App() {
  // eslint-disable-line no-unused-vars
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement("h1", null, "React Material Final Form"), _react.default.createElement(_DetailForm.default, {
    title: metadata.title,
    metadata: metadata,
    data: data,
    debug: true,
    onSubmit: console.log
  }));
}

_reactDom.default.render(_react.default.createElement(App, null), document.getElementById('root')); // eslint-disable-line no-undef