/* eslint-disable */
import React from 'react'
import * as Yup from "yup";

import close from "../../../../public/image/close.png";

import "./Register.scss";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const validationShema = Yup.object().shape({
  email: Yup.string().email().required("Email is not empty!"),
  password: Yup.string().required("Password is not empty!"),
})

const initialValues = {
  email: "",
  password: ""
}

const Register = () => {

  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  }

  return (
    <div className='body-form'>
      <div className='form-login'>
        <div className='exit'>
          <Link onClick={navigateBack}><img className='close-icon' src={close} /></Link>
        </div>

        <p className='tt-form'><b>Register</b></p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationShema}

          onSubmit={async (values) => {
            try {
              const { data } = await axios.post(" https://reqres.in/api/register", values);

              toast.success("Register successfully!");

              navigate("/login");

            } catch (error) {
              console.log(error);
            }
          }}
        >
          <Form className='login-form'>
            <Field className="input" name="email" type="email" placeholder="Email" />
            <ErrorMessage name='email' component="div" style={{ color: 'red' }} />

            <br />
            <Field className="input" name="password" type="password" placeholder="Password" />
            <ErrorMessage name='password' component="div" style={{ color: 'red' }} />

            <button type='submit' className='btn-login'>Register</button>
            <div className='head-form'>
              <p>You have an account? <Link to="/login" className='link-register'>Login</Link> </p>
            </div>
          </Form>
        </Formik>

      </div>
    </div>
  )
}

export default Register;