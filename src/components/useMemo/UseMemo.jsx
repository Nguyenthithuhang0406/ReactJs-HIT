/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    // const [total, setTotal] = useState(0);
    const [product, setProduct] = useState([]);
    
    const AddProduct = () => {
        setProduct([...product, {
            name,
            price: Number(price),
        }]);
        // setTotal(prev => (+prev + price));
    }

    // const total = product.reduce((prev, curr) => prev + curr.price, 0);
    const total = useMemo(() => {
        return product.reduce((prev, curr) => prev + curr.price, 0);
    }, [product]);
    
    console.log(total)
  return (
    <>
        <label>Ten sp: </label>
        <input
            name='name'
            type='text'
            onChange={(e) => setName(e.target.value)}
        />
        <br/>

        <label>gia sp</label>
        <input 
            name='price'
            type='number'
            onChange={(e) => setPrice(e.target.value)}
        />
        <br/>

        <button onClick={AddProduct}>Add</button>
        <br/>

        <p>total: {total}</p>
        {product && product.map((item, index) => {
                return (<p key={index}>{item.name} - {item.price}</p>)
        })}
    </>
  )
}

export default UseMemo;