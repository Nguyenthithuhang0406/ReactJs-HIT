/* eslint-disable */
import React from 'react'
import Form1 from './components/form/Form1';
import FormikForm from './components/form/FormikForm';
import ReactHookForm from './components/form/ReactHookForm';

const App = () => {
  return (
    <>
      <Form1 />
      <FormikForm />
      <ReactHookForm/>
    </>
  )
}

export default App;