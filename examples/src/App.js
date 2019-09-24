import React, { Fragment } from 'react';
import DetailForm from 'react-material-final-form';

const metadata = {
  fields: [{
    key: 'programId',
    type: 'String',
    label: 'Program ID',
    isDisabled: true,
  }]
};

function App() {
  return (
    <Fragment>
      <DetailForm metadata={metadata} />
    </Fragment>
  )
}

export default App;
