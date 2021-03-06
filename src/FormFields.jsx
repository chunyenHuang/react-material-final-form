import React, { Fragment } from 'react'; // eslint-disable-line no-unused-vars
import { Field } from 'react-final-form'; // eslint-disable-line no-unused-vars
import { FieldArray } from 'react-final-form-arrays'; // eslint-disable-line no-unused-vars
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
import {
  RadioGroup, // eslint-disable-line no-unused-vars
  FormLabel, // eslint-disable-line no-unused-vars
  MenuItem, // eslint-disable-line no-unused-vars
  FormGroup, // eslint-disable-line no-unused-vars
  FormControl, // eslint-disable-line no-unused-vars
  FormControlLabel, // eslint-disable-line no-unused-vars
  Typography, // eslint-disable-line no-unused-vars
} from '@material-ui/core';
import Dropzone from 'react-dropzone'; // eslint-disable-line no-unused-vars

export {
  renderFormField,
  formDate,
  formInput,
  formInputPhone,
  formCheckbox,
  formRadio,
  formTextarea,
  formSelect,
  formFile,
};

function renderFormField(inFormFieldProp = {}, inPrefixKey) {
  let {
    key,
    label,
    formType = '',
    formOptions,
    formObjects,
    formInputArrayObject,
    // formDescription,
    formFormatFunction,
    formParseFunction,
    isRequired,
    isDisabled,
    isHidden,
    type,
  } = inFormFieldProp;

  if (isHidden) return null;

  const formKey = (inPrefixKey) ? `${inPrefixKey}[${key}]` : key;
  switch (formType.toLocaleLowerCase()) {
  case 'object':
    return (
      <Fragment>
        <Typography variant="body1">{label}</Typography>
        {formObjects.map((item, index) => {
          return (
            <div key={index} className="nested-form-input-field">
              {renderFormField(item, formKey)}
            </div>
          );
        })}
      </Fragment>);
  case 'inputarray':
    return (<Fragment>
      <Typography variant="body1">{label}</Typography>
      <FieldArray name={formKey}>
        {({ fields }) =>
          fields.map((name, fieldIndex) => {
            return (
              <Fragment key={fieldIndex}>
                {formInputArrayObject.map((item, index) => {
                  return (
                    <div key={index} className="nested-form-input-field">
                      {formInput(`${formKey}[${fieldIndex}][${item.key}]`, item.label)}
                    </div>
                  );
                })}
              </Fragment>
            );
          }
          )}
      </FieldArray>
    </Fragment>);
  case 'select':
    return formSelect(formKey, label, formOptions);
  case 'checkbox':
    return formCheckbox(formKey, label, formOptions);
  case 'radio':
    return formRadio(formKey, label, isRequired, formOptions);
  case 'textarea':
    return formTextarea(formKey, label, isRequired);
  case 'date':
    return formDate(formKey, label, isRequired, formFormatFunction, formParseFunction);
  case 'datetime':
    return formDateTime(formKey, label, isRequired, formFormatFunction, formParseFunction);
  case 'phone':
    return formInputPhone(formKey, label, isRequired);
  default:
    // text input
    return formInput(formKey, label, isRequired, isDisabled, type);
  }
}

function formInput(inName, inLabel, inRequired = true, inDisabled = false, inType = 'text') {
  return (<Field
    fullWidth
    required={inRequired}
    name={inName}
    component={TextField}
    disabled={inDisabled}
    type={inType}
    label={inLabel}
    parse={(value)=>{
      if(value && inType.toLocaleLowerCase() === 'number' && !isNaN(value)){
        return parseFloat(value);
      } else {
        return value;
      }
    }}
  />);
}

const normalizePhone = value => {
  if (!value) return value;
  const onlyNums = `${value}`.replace(/[^\d]/g, '');
  if (onlyNums.length <= 3) {
    return onlyNums;
  }
  if (onlyNums.length <= 7) {
    return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 7)}`;
  }
  return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 6)}-${onlyNums.slice(6,10)}`;
};

function formInputPhone(inName, inLabel, inRequired = true, inDisabled = false) {
  return (<Field
    fullWidth
    required={inRequired}
    name={inName}
    component={TextField}
    parse={(value)=>{
      return value.replace(/\D+/g, '');
    }}
    format={normalizePhone}
    disabled={inDisabled}
    type="text"
    label={inLabel}
  />);
}

function formDate(inName, inLabel, inRequired = true, inFormFormatFunction, inFormParseFunction) {
  return (
    <Field
      className="date-field"
      name={inName}
      component={TextField}
      fullWidth
      required={inRequired}
      type="date"
      margin="normal"
      label={inLabel}
      InputLabelProps={{
        shrink: true,
      }}
      format={inFormFormatFunction? inFormFormatFunction : (value)=>{
        return value;
      }}
      parse={inFormParseFunction? inFormParseFunction : (value)=>{
        return value;
      }}
    />);
}

function formDateTime(inName, inLabel, inRequired = true, inFormFormatFunction, inFormParseFunction) {
  return (
    <Field
      className="date-field"
      name={inName}
      component={TextField}
      fullWidth
      required={inRequired}
      type="datetime-local"
      margin="normal"
      label={inLabel}
      InputLabelProps={{
        shrink: true,
      }}
      format={inFormFormatFunction? inFormFormatFunction : (value)=>{
        return value;
      }}
      parse={inFormParseFunction? inFormParseFunction : (value)=>{
        return value;
      }}
    />);
}

function formTextarea(inName, inLabel, inRequired = true) {
  return (<Field
    fullWidth
    name={inName}
    component={TextField}
    multiline
    required={inRequired}
    label={inLabel}
  />);
}

function formCheckbox(inName, inLabel, inOptions) {
  return (
    <FormControl component="fieldset" className="form-radio-container">
      <FormLabel component="legend">{inLabel}</FormLabel>
      <FormGroup row>
        {inOptions.map((option, index)=>{
          return (<FormControlLabel
            key={index}
            label={option.label}
            control={
              <Field
                name={inName}
                component={Checkbox}
                type="checkbox"
                value={option.value}
              />
            }
          />);
        })}
      </FormGroup>
    </FormControl>);
}

function formRadio(inName, inLabel, inRequired = true, inOptions, inDisabled = false) {
  return (
    <FormControl component="fieldset" className="form-radio-container">
      <FormLabel component="legend" >{inLabel}</FormLabel>
      <RadioGroup row>
        {inOptions.map((option, index)=>{
          let parseType;
          switch(typeof(option.value)){
          case 'number':
            parseType = Number;
            break;
          case 'string':
          default:
            parseType = String;
          }
          return (
            <FormControlLabel
              key={index}
              label={option.label}
              control={
                <Field
                  name={inName}
                  disabled={inDisabled}
                  required={inRequired}
                  component={Radio}
                  type="radio"
                  value={option.value}
                  parse={parseType}
                />
              }
            />);
        })}
      </RadioGroup>
    </FormControl>);
}

function formSelect(inName, inLabel, inOptions) {
  return (
    <Field
      fullWidth
      name={inName}
      component={Select}
      label={inLabel}
      required={true}
      formControlProps={{ fullWidth: true }}
    >
      {inOptions.map((option, index)=>{
        return (<MenuItem key={index} value={option.value}>{option.label}</MenuItem>);
      })}
    </Field>);
}

function formFile(inName, inLabel, inRequired, inOptions, inDisabled, inForm) {
  const onDrop = (files) => {
    console.log(files);
    // upload and save the link.
    inForm.change(inName, files);
    inForm.blur(inName);
  };

  return (
    <Fragment>
      <Field name={inName}>
        {() => (
          <Fragment>
            <label>{inLabel}</label>
            <Dropzone onDrop={onDrop}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <h4>Drag 'n' drop some files here, or click to select files</h4>
                  </div>
                </section>
              )}
            </Dropzone>
          </Fragment>
        )}
      </Field>
    </Fragment>
  );
}
