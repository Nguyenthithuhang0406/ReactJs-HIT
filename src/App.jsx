/* eslint-disable */
import React, { useEffect } from 'react';

import { useRoutes } from 'react-router-dom';

import Home from './components/start-boostrap/home/Home';
import Login from './components/start-boostrap/login/Login';
import Register from './components/start-boostrap/register/Register';
import AboutUs from './components/start-boostrap/aboutUs/AboutUs';
import Contact from './components/start-boostrap/contact/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./index.scss";
import HomePage from './components/page/homePage/HomePage';
import Todo from './components/todoApp/todo/Todo';
import LoginPage from './components/login/LoginPage';
import Info from './components/page/information/Info';
const App = () => {
  const router = useRoutes([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/todoApp',
      element: <Todo />
    },
    {
      path: '/loginPage',
      element: <LoginPage />
    },
    {
      path: '/profile',
      element: <Info />
    },
    {
      path: '/startBoostrap',
      element: <Home />
    },
    {
      path: 'login',
      element: <Login />
    },
    {
      path: 'register',
      element: <Register />
    },
    {
      path: 'aboutUs',
      element: <AboutUs />
    },
    {
      path: 'contact',
      element: <Contact />
    },
    {
      path: '*',
      element: <p> Error 404: Page not found!</p>
    }
  ])

  return (
    <>
        {router}
        <ToastContainer />
    </>
  )

}

export default App;