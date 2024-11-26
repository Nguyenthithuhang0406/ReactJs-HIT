/* eslint-disable */
import React, { useState } from 'react'
import Form1 from './components/form/Form1';
import FormikForm from './components/form/FormikForm';
import ReactHookForm from './components/form/ReactHookForm';
import Bai1 from './components/Bai1/Bai1';
import Bai2 from './components/BTVN2/Bai2/Bai2';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import AboutUs from './components/pages/AboutUs';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import NotFound from './components/pages/NotFound';

import "./App.scss";
import Product from './components/pages/product/Product';
import DetailProduct from './components/pages/detailProduct/DetailProduct';

const App = () => {
  const [token, setToken] = useState(null);

  const handleLogin = () => {
    const access_token = localStorage.getItem("access_token")
    setToken(access_token ? access_token : null);
  }

  const onChangeActive = (props) => {
    return props.isActive ? 'active' : '';
  }
  return (
    <>
      {/* <Form1 />
      <FormikForm />
      <ReactHookForm/> */}
      {/* <Bai1 handleLogin={handleLogin} />

      {token ? <h1>Da Login</h1> : <h1>Chua Login</h1>} */}
      {/* <Bai2/> */}

      <nav>
        <ul>
          <NavLink to="/" className={onChangeActive}>Home</NavLink>
          <br />
          <NavLink to="/contact" className={onChangeActive}>Contact</NavLink>
          <br />
          <NavLink to="aboutUs" className={onChangeActive}>About Us</NavLink>
        </ul>
        {/* <h1>Home page</h1> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/product' element={<Product />} >
            <Route path=':id' element={<DetailProduct />} />
          </Route>

        </Routes>
      </nav>
    </>
  )
}

export default App;