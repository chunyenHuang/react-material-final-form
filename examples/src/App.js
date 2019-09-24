import React, { Fragment } from 'react';
import DetailForm from 'react-material-final-form';

const metadata = {
  title: 'My form',
  fields: [{
    key: 'text',
    type: 'String',
    label: 'Text',
  }, {
    key: 'defaultValue',
    type: 'String',
    label: 'Default Value',
  }, {
    key: 'number',
    type: 'Number',
    label: 'Number',
  }, {
    key: 'disabledField',
    type: 'String',
    label: 'Disabled Field',
    isDisabled: true,
  }]
};

const data = {
  defaultValue: 'Value'
};

function App() {
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
  )
}

export default App;
