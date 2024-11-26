/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams } from 'react-router-dom';

const DetailProduct = () => {
    const param = useParams();
    return (
        <div>DetailProduct {param.id}</div>
    )
}

export default DetailProduct;