import React, { Fragment } from 'react';
import DetailForm from 'react-material-final-form';

const metadata = {
  title: 'Create a new form',
  fields: [{
    key: 'text',
    type: 'String',
    label: 'Text',
  }, {
    key: 'defaultValue',
    type: 'String',
    label: 'Default Value',
  },  {
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
      <DetailForm 
        metadata={metadata}
        data={data}
        debug={true}
        onSubmit={console.log}
      />
    </Fragment>
  )
}

export default App;
