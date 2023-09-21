import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const {products} = useLoaderData()
    // console.log(products)
    return (
        <div>
            <h1 className='my-10 text-2xl font-bold'>Total Products : {products.length} </h1>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-3'>
                {
                    products?.map( product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;