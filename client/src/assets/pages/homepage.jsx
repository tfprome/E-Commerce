import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/layout.jsx';
// import Sliderskeleton from './../components/skeleton/slider-skeleton';
// import Featureskeleton from '../components/skeleton/features-skeleton.jsx';
// import Categoryskeleton from '../components/skeleton/categories-skeleton.jsx';
// import Productskeleton from '../components/skeleton/products-skeleton.jsx';
// import Brandskeleton from '../components/skeleton/brands-skeleton.jsx';
import ProductStore from '../components/store/productstore.js';
import Brands from '../components/products/brands.jsx';
import Sliders from '../components/products/slider.jsx';
import Categories from '../components/products/categories.jsx';
import Products from '../components/products/products.jsx';

const Homepage = (props) => {
   const { BrandListRequest, CategoryListRequest, SliderListRequest } = ProductStore();
   //const [loading, setLoading] = useState(true)
   // BrandListRequest()
   useEffect(() => {
      (async()=>{
            await BrandListRequest();
             await CategoryListRequest();
             await SliderListRequest();
      })()},
      [])


   return (
      <Layout>
         <Sliders />
         <Categories />
         <Brands/>
        {/* <Products/> */}
            
            
           
            {/* {<BrandListRequest/>&&<Brands />} */}
             {/* {<CategoryListRequest/> && <Categories/>}  */}




      </Layout>
   );
};

export default Homepage;