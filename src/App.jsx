/* eslint-disable */
import React from 'react'
import { useRoutes } from 'react-router-dom';
import Home from './components/page/home/Home';
import Profile from './components/profile/Profile';
import SignIn from './components/signIn/SignIn';

import "./index.scss";

const App = () => {
  const router = useRoutes([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/profile',
      element: <Profile/>
    },
    {
      path: '/signIn',
      element: <SignIn/>
    }
  ])
  return router;
}

export default App;