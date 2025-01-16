import React, { createContext, useEffect, useState } from 'react'
import {  Route, Routes  as PathRoutes, useLocation,Navigate} from 'react-router-dom'

import Dashboard from '../admin/Dashboard'
import Login from '../admin/Login'
import Work from '../admin/Work'
import Services from '../admin/Services'
import ServiceItem from '../admin/ServiceItem'
import Reviews from '../admin/Reviews'
import Queries from '../admin/Queries'
import NotFound from '../pages/NotFount'

// PrivateRoute component to handle route protection
const PrivateRoute = ({ element, authToken }) => {
  return authToken ? element : <Navigate to="/admin" />;
};

 export const TokenContext = createContext();
const Routes = () => {
  const [token, setToken] = useState(localStorage.getItem('authToken'));
  const location = useLocation()

  

  
  return (
    <>
    
      <div className={`${ location.pathname ==="/admin"? "w-full":"md:w-4/5 w-full p-4"} h-screen bg-gray-100`}>
    <TokenContext.Provider value={{ token, setToken }}>
    <PathRoutes>
    <Route path="/admin/home" element={<PrivateRoute element={<Dashboard />} authToken={token} />} />
        <Route path="/admin" element={<Login  />} />
        <Route path="/admin/work" element={<PrivateRoute element={<Work />} authToken={token} />} />
        <Route path="/admin/services" element={<PrivateRoute element={<Services />} authToken={token} />} />
        <Route path="/admin/serviceItem" element={<PrivateRoute element={<ServiceItem />} authToken={token} />} />
        <Route path="/admin/reviews" element={<PrivateRoute element={<Reviews />} authToken={token} />} />
        <Route path="/admin/queries" element={<PrivateRoute element={<Queries />} authToken={token} />} />
        {/* <Route path="/admin/logout" element={<PrivateRoute element={<Logout />} authToken={authToken} />} /> */}
        <Route path="*" element={<NotFound />} />
    </PathRoutes>
    
</TokenContext.Provider>
    </div>

    </>
  )
}

export default Routes
