import React, { Fragment } from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import moment from 'moment';
import DetailForm from './DetailForm.jsx'; // eslint-disable-line no-unused-vars

const metadata = {
  title: 'My form',
  fields: [{
    key: 'text',
    type: 'string',
    label: 'Text',
  }, {
    key: 'textarea',
    type: 'string',
    label: 'Text Area',
    formType: 'textarea',
  }, {
    key: 'phone',
    type: 'string',
    label: 'Phone',
    formType: 'phone',
  }, {
    key: 'number',
    type: 'number',
    label: 'Number',
  }, {
    key: 'date',
    type: 'string',
    label: 'Date',
    formType: 'date',
  }, {
    key: 'dateWithParseFunction',
    type: 'string',
    label: 'Date with parse function',
    formType: 'date',
    formFormatFunction(value) {
      return moment(value).format('YYYY-MM-DD');
    },
    formParseFunction(value) {
      return moment(value).toISOString();
    }
  }, {
    key: 'dateTime',
    type: 'string',
    label: 'Date Time',
    formType: 'datetime',
  }, {
    key: 'disabledField',
    type: 'string',
    label: 'Disabled Field',
    isDisabled: true,
  }, {
    key: 'notRequired',
    type: 'string',
    label: 'Not Required field',
    isRequired: false,
  }, {
    key: 'radio',
    type: 'number',
    label: 'Radio',
    formType: 'Radio',
    formOptions: [
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 },
    ],
  }, {
    key: 'radio2',
    type: 'number',
    label: 'Radio',
    formType: 'Radio',
    formOptions: [
      { label: 'a', value: 'a' },
      { label: 'b', value: 'b' },
      { label: 'c', value: 'c' },
    ],
  }, {
    key: 'profile.address',
    type: 'Array',
    label: 'Address',
    formType: 'InputArray',
    formInputArrayObject: [{
      key: 'street',
      label: 'Street',
    }, {
      key: 'city',
      label: 'City',
    }, {
      key: 'state',
      label: 'State',
    }, {
      key: 'zipCode',
      label: 'Zip Code',
    }]
  }, {
    key: 'selectObject',
    type: 'Object',
    label: 'Select Object',
    formType: 'Object',
    formObjects: [{
      key: 'prop1',
      type: 'Number',
      label: 'Prop 1',
      formType: 'Select',
      formOptions: [
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 },
      ]
    }, {
      key: 'prop2',
      type: 'Number',
      label: 'Prop 2',
      formType: 'Radio',
      formOptions: [
        { label: 'a', value: 'a' },
        { label: 'b', value: 'b' },
        { label: 'c', value: 'c' },
      ],
    }],
  }, {
    key: 'checkbox',
    type: 'Array',
    label: 'Checkbox',
    formType: 'Checkbox',
    formOptions: [
      { label: 'English', value: 'English' },
      { label: 'Mandarin', value: 'Mandarin' },
      { label: 'Spanish', value: 'Spanish' },
      { label: 'Cantonese', value: 'Cantonese' },
      { label: 'Vietnamese', value: 'Vietnamese' },
      { label: 'Tagalog', value: 'Tagalog' },
      { label: 'Malay', value: 'Malay' },
      { label: 'Korean', value: 'Korean' },
      { label: 'Japanese', value: 'Japanese' },
      { label: 'French', value: 'French' },
      { label: 'German', value: 'German' },
    ],
  }, ]
};

const data = {
  text: 'Value',
  textarea: "abc\n123\nabc",
  phone: '1231231231',
  number: 1024,
  date: '2019-02-01',
  dateWithParseFunction: '2019-01-21T08:00:00.000Z',
  dateTime: '2019-01-21T12:59:01',
  disabledField: 'Disabled',
  radio: 1,
  radio2: 'c',
  profile: {
    address: [{ street: 'my st', city: 'Irvine', state: 'CA', zipCode: '92603' }]
  },
  selectObject: {
    prop1: 1,
    prop2: 'b',
  },
  checkbox: ['Mandarin', 'French']
};

function App() { // eslint-disable-line no-unused-vars
  return (
    <Fragment>
      <h1>React Material Final Form</h1>
      <DetailForm 
        title={metadata.title}
        metadata={metadata}
        data={data}
        debug={true}
        onSubmit={console.log}
      />
    </Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root')); // eslint-disable-line no-undef
