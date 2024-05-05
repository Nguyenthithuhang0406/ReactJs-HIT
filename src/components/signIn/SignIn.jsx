/* eslint-disable */
import React from 'react'
import * as Yup from 'yup';

import "./SignIn.scss";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const validationShema = Yup.object().shape({
  email: Yup.string().email("Input is not email!").required("Email is not empty!"),
  password: Yup.string().required("Password is not empty!")
});

const initialValues = {
  email: '',
  password: ''
};

const SignIn = () => {

  const navigate = useNavigate();

  return (
    <>
      <ToastContainer />
      <div className='signIn'>
        <div className='logo'>
          <div className='lg1'></div>
          <div className='lg2'></div>
        </div>

        <div className='body-form'>
          <div className='form-signIn'>
            <p className='tt-form'><b>Sign In</b></p>
            <Formik
              initialValues={initialValues}
              validationSchema={validationShema}
              onSubmit={async (values) => {
                try {
                  const { data } = await axios.post(' https://reqres.in/api/login', values);

                  localStorage.setItem("access_token", data.token);

                  toast.success("Sign In successfully!");

                  navigate('/');
                } catch (err) {
                  console.log(err);
                }
              }}
            >
              <Form className='form'>
                <label className='lb-form'>Email</label>
                <br />
                <Field className='input-form' name='email' type='text' />
                <ErrorMessage name='email' component="div" style={{ color: 'red' }} />
                <br /><br />

                <label className='lb-form'>Password</label>
                <br />
                <Field className='input-form' name='password' type='password' />
                <ErrorMessage name='password' component="div" style={{ color: 'red' }} />
                <br /><br />

                <button type='submit' className='btn-submit-form'>Sign In</button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn