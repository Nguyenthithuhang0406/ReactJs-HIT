// /* eslint-disable */
// import React from 'react';
// import * as Yup from 'yup';
// import { ErrorMessage, Field, Form, Formik } from 'formik';

// import searchIcon from "../../assets/image/searchIcon.png";
// import chuongIcon from "../../assets/image/chuongIcon.png";
// import accountIcon from "../../assets/image/accountIcon.jpg";
// import editIcon from "../../assets/image/editIcon.png";
// import account from "../../assets/image/account.png";
// import dashboardIcon from "../../assets/image/dashboardIcon.png";
// import heartIcon from "../../assets/image/heartIcon.png";
// import settingIcon from "../../assets/image/settingIcon.png";

// import "./Bai2.scss";

// const validationSchema = Yup.object().shape({
//     username: Yup.string()
//         .min(5, 'Tên đăng nhập phải có ít nhất 5 kí tự!')
//         .required('Tên đăng nhập không được bỏ trống!'),
//     email: Yup.string()
//         .email('Email không hợp lệ!')
//         .required('Email không được bỏ trống!'),
//     curentPassword: Yup.string()
//         .min(8, 'Mật khẩu phải chứa ít nhất 8 kí tự!')
//         .required("Mật khẩu hiện tại không được bỏ trống!"),
//     newPassword: Yup.string()
//         .min(8, 'Mật khẩu phải có ít nhất 8 kí tự!')
//         .required('Mật khẩu mới không được bỏ trống!'),
//     confirmPassword: Yup.string()
//         .oneOf([Yup.ref('newPassword'), null], 'Mật khẩu xác nhận phải giống với mật khẩu mới!')
//         .required('Mật khẩu xác nhận không được để trống!'),
// })
// const options = {
//     genders: ['Male', 'Female'],
//     languages: ['English', 'Vietnamese', 'French', 'Spanish'],
//     countries: ['Vietnam', 'England', 'China', 'Japan', 'American']
// };

// const Bai2 = () => {
//     return (
//         <div className='body'>
//             <div className='header'>
//                 <div className='left-header'>
//                     <p> Settings {' > '} </p>
//                     <p>User Profile</p>
//                 </div>
//                 <div className='box-search'>
//                     <img className="icon" src={searchIcon} />
//                     <input className='input' placeholder='Search...' />
//                 </div>
//                 <div className='right-header'>
//                     <img className='bell' src={chuongIcon} />
//                     <img className='account' src={accountIcon} />
//                 </div>
//             </div>
//             <hr />

//             <div className='sidebar'>
//                 <div className='avata'>
//                     <img className='ava' src={accountIcon} />
//                     <img className='edit-icon' src={editIcon} />
//                 </div>

//                 <div className='group-sidebar'>
//                     <img className='icon-sidebar' src={account} />
//                     <a>
//                         <p className='link-sidebar' >User Info</p>
//                     </a>
//                 </div>

//                 <div className='group-sidebar'>
//                     <img className='icon-sidebar' src={dashboardIcon} />
//                     <a>
//                         <p className='link-sidebar' >Dashboard</p>
//                     </a>
//                 </div>

//                 <div className='group-sidebar'>
//                     <img className='icon-sidebar' src={heartIcon} />
//                     <a>
//                         <p className='link-sidebar' >Favourites</p>
//                     </a>
//                 </div>

//                 <div className='group-sidebar'>
//                     <img className='icon-sidebar' src={settingIcon} />
//                     <a>
//                         <p className='link-sidebar' >Settings</p>
//                     </a>
//                 </div>
//             </div>

//             <div className='content'>
//                 <p className='title'><b>User profile</b></p>
//                 <Formik
                    
//                 >
//                     <Form>
//                         <div className='left-content'>
//                             <div className='form-item'>
//                                 <label htmlFor='username'>Username</label>
//                                 <Field name='username' type='text' />
//                                 <ErrorMessage name='username' />
//                             </div>

//                             <div className='form-item'>
//                                 <label htmlFor='email'>Email</label>
//                                 <Field name='email' type='text' />
//                                 <ErrorMessage name='email' />
//                             </div>

//                             <div className='form-item'>
//                                 <label htmlFor='gender'>Gender</label>
//                                 <Field as='select' name='gender'>
//                                     {options.genders.map(gender => (<options key={gender} value={gender}>{gender}</options>))}
//                                 </Field>
//                             </div>

//                             <div className='form-item'>
//                                 <label htmlFor='birthday'>Birthday</label>
//                                 <Field as="select" name='day'>
//                                     {Array.from({ length: 31 }, (_, i) => (
//                                         <options key={i + 1} value={i + 1}>{i + 1}</options>
//                                     ))}
//                                 </Field>
//                                 <Field as="select" name='month'>
//                                     {Array.from({ length: 12 }, (_, i) => (
//                                         <options key={i + 1} value={i + 1}>{i + 1}</options>
//                                     ))}
//                                 </Field>
//                                 <Field as="select" name='year'>
//                                     {Array.from({ length: 121 }, (_, i) => (
//                                         <options key={1900 + i} value={1900 + i}>{1900 + i}</options>
//                                     ))}
//                                 </Field>

//                             </div>

//                             <div className='form-item'>
//                                 <label htmlFor='language'>Language</label>
//                                 <Field as='select' name='language'>
//                                     {options.languages.map(language => (<options key={language} value={language}>{language}</options>))}
//                                 </Field>
//                             </div>


//                             <div className='form-item'>
//                                 <label htmlFor='country'>Country</label>
//                                 <Field as='select' name='country'>
//                                     {options.countries.map(country => (<options key={country} value={country}>{country}</options>))}
//                                 </Field>
//                             </div>
//                         </div>

//                         <div className='right-content'>
//                             <div className='form-item'>
//                                 <label htmlFor='currentPassword'>Current Password</label>
//                                 <Field name='currentPassword' type='password' />
//                                 <ErrorMessage name='currentPassword' />
//                             </div>

//                             <div className='form-item'>
//                                 <label htmlFor='newPassword'>New Password</label>
//                                 <Field name='newPassword' type='password' />
//                                 <ErrorMessage name='newPassword' />
//                             </div>

//                             <div className='form-item'>
//                                 <label htmlFor='confirmPassword'>Confirm Password</label>
//                                 <Field name='confirmPassword' type='password' />
//                                 <ErrorMessage name='confirmPassword' />
//                             </div>

//                             <div className='confirm'>
//                                 <p className='p'>Email notification</p>
//                                 <button className='bt'></button>
//                             </div>

//                             <div className='confirm1'>
//                                 <p className='p'>Private Account</p>
//                                 <button className='bt'></button>
//                             </div>

//                             <button className='bt-submit'>Save Changes</button>
//                         </div>
//                     </Form>
//                 </Formik>
//             </div>
//         </div>
//     )
// }

// export default Bai2;
