import React from 'react'
import Header from '../component/Header';
import Footer from '../component/Footer';
import Routes from '../routes/Routes';
import HomeFooter from '../component/HomeFooter';
import { useLocation } from 'react-router-dom';
import AdminRoutes from '../adminroutes/AdminRoutes'
import AdminSidebar from '../admin/AdminSidebar';
import { ToastContainer } from 'react-toastify';

const Layout = () => {
  const location = useLocation();

  return (
    <div className='select-none'>
    <ToastContainer/>
    {location.pathname.startsWith("/admin") ? (
      <div className='flex w-full'>
        {location.pathname === "/admin" ?"":<AdminSidebar/>}
        
      <AdminRoutes /></div>
    ) : (
      <>
        <Header /> 
        <Routes />
    {location.pathname === "/" ? <HomeFooter /> : <Footer />}
      </>
    )}
    
  </div>
  );
}

export default Layout;

