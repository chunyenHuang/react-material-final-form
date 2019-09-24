import React, { Fragment } from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
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
  },  {
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
    key: 'dateTime',
    type: 'string',
    label: 'Date Time',
    formType: 'datetime',
  }, {
    key: 'disabledField',
    type: 'string',
    label: 'Disabled Field',
    isDisabled: true,
  }]
};

const data = {
  text: 'Value',
  textarea: "abc\n123\nabc",
  phone: '(123) 123-1231',
  number: 1024,
  date: '2019-02-01',
  dateTime: '2019-01-21T12:59:01',
  disabledField: 'Disabled'
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
