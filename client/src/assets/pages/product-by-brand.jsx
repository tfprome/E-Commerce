import React, { useEffect } from 'react';
import ProductStore from '../components/store/productstore';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/layout';
import ProductList from './../components/products/product-list';

const ProductByBrand = (props) => {

    const {ListbyBrandRequest}=ProductStore()
    const {id}=useParams()

    useEffect(()=>{
        (async()=>{
            //console.log(id)
            await ListbyBrandRequest(id)
        })()
    },[]

    )
    

    return (
        
       <Layout>
        <ProductList/>
       </Layout>
    );
};

export default ProductByBrand;