/* eslint-disable */
import React from 'react'
import * as Yup from "yup";

import close from "../../../../public/image/close.png";

import "./Login.scss";
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

const Login = () => {

  const navigate = useNavigate();

  return (
    <div className='body-form'>
      <div className='form-login'>
        <div className='exit'>
          <Link to="/"><img className='close-icon' src={close} /></Link>
        </div>

        <p className='tt-form'><b>Login</b></p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationShema}

          onSubmit={async (values) => {
            try {
              const { data } = await axios.post(" https://reqres.in/api/login", values);

              localStorage.setItem("access_token", data.token);

              toast.success("Login successfully!");

              navigate("/")

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

            <button type='submit' className='btn-login'>Login</button>
            <div className='head-form'>
              <p>Don't have an account? <Link to="/register" className='link-register'>Register</Link> </p>
            </div>
          </Form>
        </Formik>

      </div>
    </div>
  )
}

export default Login;