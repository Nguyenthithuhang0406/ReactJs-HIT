/* eslint-disable */
import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Product = () => {

    const list = [1, 2, 3, 4, 5, 6];
  return (
      <>
          <div> List Product</div>
          {
               list.map((item) => {
                  return <Link to={`/product/${item}`}>product {item}</Link>
              })
            }
          <Outlet />
      </>
  )
}

export default Product;