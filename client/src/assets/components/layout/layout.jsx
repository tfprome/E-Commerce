import React from 'react';
import Appnav from './appnav.jsx';
import Footer from './footer.jsx';
import {Toaster} from 'react-hot-toast'


const Layout = (props) => {
    return (
        
        <>
           <Appnav/>     
        
           {props.children}
           <Toaster/>
           <Footer/>
        </>
    );
};

export default Layout;