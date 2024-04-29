/* eslint-disable */
import React from 'react';
import Home from './components/home/Home';

import "./index.scss";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AboutUs from './components/aboutUs/AboutUs';
import Contact from './components/contact/Contact';
import Register from './components/register/Register';

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/> } />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;