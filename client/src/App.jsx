import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Homepage from './assets/pages/homepage';
import ProductByBrand from './assets/pages/product-by-brand';
import Cart from './assets/components/cart/cart.jsx';
import ProductByCategory from './assets/pages/productbycategory.jsx';
import LoginPage from './assets/pages/loginpage.jsx';
import OtpForm from './assets/components/user/otp form.jsx';
import ProfileForm from './assets/components/user/profileform.jsx';
import ProductDetails from './assets/components/products/productdetails.jsx';

const App = (props) => {
    return (
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/by-brand/:id' element={<ProductByBrand/>}/>
          <Route path='/by-category/:id' element={<ProductByCategory/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/otp' element={<OtpForm/>}/>
          <Route path='/profile' element={<ProfileForm/>}/>
          <Route path='/details/:id' element={<ProductDetails/>}/>
        </Routes>
        </BrowserRouter>
    );
}

export default App;