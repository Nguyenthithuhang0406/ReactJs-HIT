/* eslint-disable */
import React from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import "./FormContent.scss";
import Toogle from '../toogle/toogle';

const validationSchema = Yup.object().shape({
    username: Yup.string()
        .min(5, 'Tên đăng nhập phải có ít nhất 5 kí tự!')
        .required('Tên đăng nhập không được bỏ trống!'),
    email: Yup.string()
        .email('Email không hợp lệ!')
        .required('Email không được bỏ trống!'),
    curentPassword: Yup.string()
        .min(8, 'Mật khẩu phải chứa ít nhất 8 kí tự!')
        .max(32, 'Mật khẩu chỉ chứa tối đa 32 kí tự!')
        .matches(/^(?=.*[A-Za-z])(?=.*\d).{8,32}$/, 'Mật khẩu phải bao gồm một chữ cái, một số và tối thiểu 8, tối đa 32 kí tự!')
        .required("Mật khẩu hiện tại không được bỏ trống!"),
    newPassword: Yup.string()
        .min(8, 'Mật khẩu phải có ít nhất 8 kí tự!')
        .max(32, 'Mật khẩu chỉ chứa tối đa 32 kí tự!')
        .matches(/^(?=.*[A-Za-z])(?=.*\d).{8,32}$/, 'Mật khẩu phải bao gồm một chữ cái, một số và tối thiểu 8, tối đa 32 kí tự!')
        .required('Mật khẩu mới không được bỏ trống!'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), null], 'Mật khẩu xác nhận phải giống với mật khẩu mới!')
        .required('Mật khẩu xác nhận không được để trống!'),
});

const initialValues = {
    username: '',
    email: '',
    curentPassword: '',
    newPassword: '',
    confirmPassword: '',
};

const options = {
    genders: ['Male', 'Female'],
    languages: ['English', 'Vietnamese', 'French', 'Spanish'],
    countries: ['Vietnam', 'England', 'China', 'Japan', 'American'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};

const FormContent = () => {
    return (
        <div className='content'>
            <p className='title'><b>User profile</b></p>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        console.log(values);
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form>
                    <div className='left-content'>
                        <div className='form-item'>
                            <label className='label' htmlFor='username'>Username</label>
                            <br />
                            <Field className='input' name='username' type='text' />
                            <br />
                            <ErrorMessage name='username' />
                        </div>

                        <div className='form-item'>
                            <label className='label' htmlFor='email'>Email</label>
                            <br />
                            <Field className='input' name='email' type='text' />
                            <br />
                            <ErrorMessage name='email' />
                        </div>

                        <div className='form-item'>
                            <label className='label' htmlFor='gender'>Gender</label>
                            <br />
                            <Field className='input' as='select' name='gender'>
                                {options.genders.map(gender => (<option key={gender} value={gender}>{gender}</option>))}
                            </Field>
                        </div>

                        <div className='form-item'>
                            <label className='label' htmlFor='birthday'>Birthday</label>
                            <br />
                            <div className='op'>
                                <Field as="select" name='month' className='op-birthday'>
                                    {options.months.map(month => (<option key={month} value={month}>{month}</option>))}
                                </Field>
                                <Field as="select" name='day' className='op-birthday'>
                                    {Array.from({ length: 31 }, (_, i) => (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    ))}
                                </Field>
                                <Field as="select" name='year' className='op-birthday'>
                                    {Array.from({ length: 121 }, (_, i) => (
                                        <option key={1900 + i} value={1900 + i}>{1900 + i}</option>
                                    ))}
                                </Field>
                            </div>

                        </div>

                        <div className='form-item'>
                            <label className='label' htmlFor='language'>Language</label>
                            <br />
                            <Field className='input' as='select' name='language'>
                                {options.languages.map(language => (<option key={language} value={language}>{language}</option>))}
                            </Field>
                        </div>


                        <div className='form-item'>
                            <label className='label' htmlFor='country'>Country</label>
                            <br />
                            <Field className='input' as='select' name='country'>
                                {options.countries.map(country => (<option key={country} value={country}>{country}</option>))}
                            </Field>
                        </div>
                    </div>

                    <div className='right-content'>
                        <div className='form-item'>
                            <label className='label' htmlFor='currentPassword'>Current Password</label>
                            <br />
                            <Field className='input' name='currentPassword' type='password' />
                            <br />
                            <ErrorMessage name='currentPassword' />
                        </div>

                        <div className='form-item'>
                            <label className='label' htmlFor='newPassword'>New Password</label>
                            <br />
                            <Field className='input' name='newPassword' type='password' />
                            <br />
                            <ErrorMessage name='newPassword' />
                        </div>

                        <div className='form-item'>
                            <label className='label' htmlFor='confirmPassword'>Confirm Password</label>
                            <br />
                            <Field className='input' name='confirmPassword' type='password' />
                            <br />
                            <ErrorMessage name='confirmPassword' />
                        </div>

                        <div className='confirm'>
                            <p className='p'>Email notification</p>
                            <Toogle className='toogle' />
                        </div>

                        <div className='confirm'>
                            <p className='p'>Private Account</p>
                            <Toogle className='toogle' />
                        </div>

                        <button className='bt-submit'>Save Changes</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default FormContent;
