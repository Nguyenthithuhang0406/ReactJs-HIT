/* eslint-disable */
import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Home from './components/start-boostrap/home/Home';
import Login from './components/start-boostrap/login/Login';
import Register from './components/start-boostrap/register/Register';
import AboutUs from './components/start-boostrap/aboutUs/AboutUs';
import Contact from './components/start-boostrap/contact/Contact';

import 'react-toastify/dist/ReactToastify.css';
import "./index.scss";
const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<p>Error 404: Page not found!</p>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;