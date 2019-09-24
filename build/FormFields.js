"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderFormField = renderFormField;
exports.formDate = formDate;
exports.formInput = formInput;
exports.formInputPhone = formInputPhone;
exports.formCheckbox = formCheckbox;
exports.formRadio = formRadio;
exports.formTextarea = formTextarea;
exports.formSelect = formSelect;
exports.formFile = formFile;

var _react = _interopRequireWildcard(require("react"));

var _reactFinalForm = require("react-final-form");

var _reactFinalFormArrays = require("react-final-form-arrays");

var _finalFormMaterialUi = require("final-form-material-ui");

var _core = require("@material-ui/core");

var _reactDropzone = _interopRequireDefault(require("react-dropzone"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function renderFormField() {
  var inFormFieldProp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var inPrefixKey = arguments.length > 1 ? arguments[1] : undefined;
  var key = inFormFieldProp.key,
      label = inFormFieldProp.label,
      _inFormFieldProp$form = inFormFieldProp.formType,
      formType = _inFormFieldProp$form === void 0 ? '' : _inFormFieldProp$form,
      formOptions = inFormFieldProp.formOptions,
      formObjects = inFormFieldProp.formObjects,
      formInputArrayObject = inFormFieldProp.formInputArrayObject,
      isRequired = inFormFieldProp.isRequired,
      isDisabled = inFormFieldProp.isDisabled,
      type = inFormFieldProp.type;
  var formKey = inPrefixKey ? "".concat(inPrefixKey, "[").concat(key, "]") : key;

  switch (formType.toLocaleLowerCase()) {
    case 'object':
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_core.Typography, {
        variant: "body1"
      }, label), formObjects.map(function (item, index) {
        return _react.default.createElement("div", {
          key: index,
          className: "nested-form-input-field"
        }, renderFormField(item, formKey));
      }));

    case 'inputarray':
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_core.Typography, {
        variant: "body1"
      }, label), _react.default.createElement(_reactFinalFormArrays.FieldArray, {
        name: formKey
      }, function (_ref) {
        var fields = _ref.fields;
        return fields.map(function (name, fieldIndex) {
          return _react.default.createElement(_react.Fragment, {
            key: fieldIndex
          }, formInputArrayObject.map(function (item, index) {
            return _react.default.createElement("div", {
              key: index,
              className: "nested-form-input-field"
            }, formInput("".concat(formKey, "[").concat(fieldIndex, "][").concat(item.key, "]"), item.label));
          }));
        });
      }));

    case 'select':
      return formSelect(formKey, label, formOptions);

    case 'checkbox':
      return formCheckbox(formKey, label, formOptions);

    case 'radio':
      return formRadio(formKey, label, isRequired, formOptions);

    case 'textarea':
      return formTextarea(formKey, label, isRequired);

    case 'date':
      return formDate(formKey, label, isRequired);

    case 'datetime':
      return formDateTime(formKey, label, isRequired);

    case 'phone':
      return formInputPhone(formKey, label, isRequired);

    default:
      // text input
      return formInput(formKey, label, isRequired, isDisabled, type);
  }
}

function formInput(inName, inLabel) {
  var inRequired = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var inDisabled = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var inType = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'text';
  return _react.default.createElement(_reactFinalForm.Field, {
    fullWidth: true,
    required: inRequired,
    name: inName,
    component: _finalFormMaterialUi.TextField,
    disabled: inDisabled,
    type: inType,
    label: inLabel,
    parse: function parse(value) {
      if (value && inType.toLocaleLowerCase() === 'number' && !isNaN(value)) {
        return parseFloat(value);
      } else {
        return value;
      }
    }
  });
}

var normalizePhone = function normalizePhone(value) {
  if (!value) return value;
  var onlyNums = "".concat(value).replace(/[^\d]/g, '');

  if (onlyNums.length <= 3) {
    return onlyNums;
  }

  if (onlyNums.length <= 7) {
    return "(".concat(onlyNums.slice(0, 3), ") ").concat(onlyNums.slice(3, 7));
  }

  return "(".concat(onlyNums.slice(0, 3), ") ").concat(onlyNums.slice(3, 6), "-").concat(onlyNums.slice(6, 10));
};

function formInputPhone(inName, inLabel) {
  var inRequired = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var inDisabled = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  return _react.default.createElement(_reactFinalForm.Field, {
    fullWidth: true,
    required: inRequired,
    name: inName,
    component: _finalFormMaterialUi.TextField,
    parse: normalizePhone,
    disabled: inDisabled,
    type: "text",
    label: inLabel
  });
}

function formDate(inName, inLabel) {
  var inRequired = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return _react.default.createElement(_reactFinalForm.Field, {
    className: "date-field",
    name: inName,
    component: _finalFormMaterialUi.TextField,
    fullWidth: true,
    required: inRequired,
    type: "date",
    margin: "normal",
    label: inLabel,
    InputLabelProps: {
      shrink: true
    }
  });
}

function formDateTime(inName, inLabel) {
  var inRequired = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return _react.default.createElement(_reactFinalForm.Field, {
    className: "date-field",
    name: inName,
    component: _finalFormMaterialUi.TextField,
    fullWidth: true,
    required: inRequired,
    type: "datetime-local",
    margin: "normal",
    label: inLabel,
    InputLabelProps: {
      shrink: true
    }
  });
}

function formTextarea(inName, inLabel) {
  var inRequired = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return _react.default.createElement(_reactFinalForm.Field, {
    fullWidth: true,
    name: inName,
    component: _finalFormMaterialUi.TextField,
    multiline: true,
    required: inRequired,
    label: inLabel
  });
}

function formCheckbox(inName, inLabel, inOptions) {
  return _react.default.createElement(_core.FormControl, {
    component: "fieldset",
    className: "form-radio-container"
  }, _react.default.createElement(_core.FormLabel, {
    component: "legend"
  }, inLabel), _react.default.createElement(_core.FormGroup, {
    row: true
  }, inOptions.map(function (option, index) {
    return _react.default.createElement(_core.FormControlLabel, {
      key: index,
      label: option.label,
      control: _react.default.createElement(_reactFinalForm.Field, {
        name: inName,
        component: _finalFormMaterialUi.Checkbox,
        type: "checkbox",
        value: option.value
      })
    });
  })));
}

function formRadio(inName, inLabel) {
  var inRequired = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var inOptions = arguments.length > 3 ? arguments[3] : undefined;
  var inDisabled = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  return _react.default.createElement(_core.FormControl, {
    component: "fieldset",
    className: "form-radio-container"
  }, _react.default.createElement(_core.FormLabel, {
    component: "legend"
  }, inLabel), _react.default.createElement(_core.RadioGroup, {
    row: true
  }, inOptions.map(function (option, index) {
    var parseType;

    switch (_typeof(option.value)) {
      case 'number':
        parseType = Number;
        break;

      case 'string':
      default:
        parseType = String;
    }

    return _react.default.createElement(_core.FormControlLabel, {
      key: index,
      label: option.label,
      control: _react.default.createElement(_reactFinalForm.Field, {
        name: inName,
        disabled: inDisabled,
        required: inRequired,
        component: _finalFormMaterialUi.Radio,
        type: "radio",
        value: option.value,
        parse: parseType
      })
    });
  })));
}

function formSelect(inName, inLabel, inOptions) {
  return _react.default.createElement(_reactFinalForm.Field, {
    fullWidth: true,
    name: inName,
    component: _finalFormMaterialUi.Select,
    label: inLabel,
    required: true,
    formControlProps: {
      fullWidth: true
    }
  }, inOptions.map(function (option, index) {
    return _react.default.createElement(_core.MenuItem, {
      key: index,
      value: option.value
    }, option.label);
  }));
}

function formFile(inName, inLabel, inRequired, inOptions, inDisabled, inForm) {
  var onDrop = function onDrop(files) {
    console.log(files); // upload and save the link.

    inForm.change(inName, files);
    inForm.blur(inName);
  };

  return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_reactFinalForm.Field, {
    name: inName
  }, function () {
    return _react.default.createElement(_react.Fragment, null, _react.default.createElement("label", null, inLabel), _react.default.createElement(_reactDropzone.default, {
      onDrop: onDrop
    }, function (_ref2) {
      var getRootProps = _ref2.getRootProps,
          getInputProps = _ref2.getInputProps;
      return _react.default.createElement("section", null, _react.default.createElement("div", getRootProps(), _react.default.createElement("input", getInputProps()), _react.default.createElement("h4", null, "Drag 'n' drop some files here, or click to select files")));
    }));
  }));
}