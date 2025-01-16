import React from 'react'
import { useLocation } from 'react-router-dom'

const PageTite = () => {
    const location = useLocation();
    const path = location.pathname.split("/");
    const currPath = path[path.length-1]
  return (
    <>
    <div className='w-full h-72  bg-[url("https://www.shutterstock.com/shutterstock/photos/1906805677/display_1500/stock-photo-customer-technical-service-warranty-quality-assurance-business-concept-1906805677.jpg")]'>
      <div className='h-full flex items-center justify-center text-4xl text-white bg-[#00000094] '>{currPath.toUpperCase()}</div>
    </div></>
  )
}

export default PageTite
