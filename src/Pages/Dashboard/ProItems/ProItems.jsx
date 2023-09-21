import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Items from '../Items/Items';
import ShowItems from '../Items/ShowItems';

const ProItems = () => {
    const {products} = useLoaderData()
    // console.log(products)
    return (
        <div>
            <h3>Pro</h3>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
                {
                    products.map(item =><ShowItems item={item}></ShowItems> )
                }
            </div>
        </div>
    );
};

export default ProItems;