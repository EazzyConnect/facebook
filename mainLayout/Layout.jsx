import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

const Layout = () => {
 return (
  <>
   <div>
    <div>
     {/* <Header /> */}
    </div>

    <div>
     <Outlet />
    </div>

    <div>
     {/* <Footer /> */}
    </div>
   </div>
  </>
 )
}

export default Layout