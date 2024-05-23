/* eslint-disable */
import React from 'react';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import * as Yup from 'yup';

import "./Login.scss";

const LoginPage = () => {
  return (
    <div className='body-login'>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={Yup.object({
          username: Yup.string()
            .min(5, "Tên đăng nhập phải chứa tối thiểu 5 kí tự!")
            .matches(/^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/, "Tên đăng nhập phải đúng dạng viết hoa chữ cái đầu mỗi từ sau khoảng trắng!")
            .required('Tên đăng nhập không được bỏ trống!'),
          password: Yup.string()
            .min(8, 'Mật khẩu phải tối thiểu 8 kí tự!')
            .matches(/^(?=.*[A-Z])(?=.*[a-z].*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Mật khẩu phải có ít nhất một kí tự in hoa, hai kí tự thường, một kí tự số, một kí tự đặc biệt!')
            .required('Mật khẩu không được bỏ trống!'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className='form'>
          <Field className='input' name='username' type="text" placeholder="username" />
          <ErrorMessage name='username' component="div" style={{ color: 'red' }} />
          <br /><br />

          <Field className='input' name="password" type="password" placeholder="password" />
          <ErrorMessage name='password' component="div" style={{ color: 'red' }} />
          <br /><br />

          <button type='submit' className='login'>LOGIN</button>
          <br /><br />

          <div className='note'>
            <p className='note1'>Not registered?</p>
            <p className='note2'>Create an account</p>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default LoginPage;