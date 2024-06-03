/* eslint-disable */
import React from 'react'
import { useRoutes } from 'react-router-dom';

import Home from './pages/home/Home';
import Profile from './components/profile/Profile';
import MindMapReact from './components/mindMapReact/MindMapReact';
import GiaiPhuongTrinh from './components/giaiPhuongTrinh/GiaiPhuongTrinh';

const App = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/profile',
      element: <Profile />
    },
    {
      path: '/mind-map-react',
      element: <MindMapReact />
    },
    {
      path: '/he-phuong-trinh',
      element: <GiaiPhuongTrinh />
    }
  ])
  return routes;
}

export default App;
