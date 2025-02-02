// import React from 'react'
import handyman from "../../assets/handyman.jpg"
import { Link } from 'react-router-dom'
const ServicesSection = () => {
  return (
    <>
     <section style={{backgroundImage:`url(${handyman})`}}  className={`relative w-full  bg-center`}>
      <div className='w-full h-full flex justify-center '>
      <div className="relative w-full py-8">
        <div className="text-center text-white py-4 flex items-center justify-evenly">
          <div className='w-1/4 border border-white'></div>
          <h2 className="text-4xl font-bold leading-tight">
            Our Services Include
          </h2>
          <div className='w-1/4 border border-white'></div>
        </div>
        <section className="flex justify-evenly text-[var(--primary-color)] flex-col sm:flex-row p-6">
          <div className="w-full sm:w-1/4  h-72 overflow-hidden rounded-xl my-2 hover:scale-110 transform transition-transform duration-300">
             <Link to="/ErpNextDetails" target="_self" className="w-full h-full hover:scale-110 transform transition-transform duration-300 flex items-center justify-center bg-center bg-cover bg-[url('https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
                          <div className=" w-full h-full text-3xl flex items-center justify-center bg-[var(--blur-bg)] hover:bg-transparent transform transition-bg duration-500 opacity-100 hover:opacity-0 transform transition-opacity duration-500">
                  <span>ERPNext</span>
              </div>
            
                </Link>
          </div>
          <div className="w-full sm:w-1/4 h-72 overflow-hidden rounded-xl my-2 hover:scale-110 transform transition-transform duration-300">
             <Link to="/Ecommerce" target="_self" className="w-full h-full hover:scale-110 transform transition-transform duration-300  flex items-center justify-center bg-center bg-cover bg-[url('https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
             <div className=" w-full h-full text-3xl flex items-center justify-center bg-[var(--blur-bg)] hover:bg-transparent transform transition-bg duration-500 opacity-100 hover:opacity-0 transform transition-opacity duration-500">
                  <span >E-Commerce</span>
              </div>
            
                </Link>
          </div>
          <div className="w-full sm:w-1/4 h-72 overflow-hidden rounded-xl my-2 hover:scale-110 transform transition-transform duration-300">
             <Link to="/PointOfSale" target="_self" className="w-full h-full hover:scale-110 transform transition-transform duration-300  flex items-center justify-center  bg-center bg-cover bg-[url('https://st3.depositphotos.com/10325516/15834/i/450/depositphotos_158349196-stock-photo-point-of-sale-system-for.jpg')]">
             <div className=" w-full h-full text-3xl flex items-center justify-center bg-[var(--blur-bg)] hover:bg-transparent transform transition-bg duration-500 opacity-100 hover:opacity-0 transform transition-opacity duration-500">
                  <span>Point Of Sale</span>
              </div>
            
                </Link>
          </div>
         
        
        </section>
        <div className="flex justify-center sm:mt-8  sm:py-4">
          
          <Link to="/services" target="_self" className="bg-[var(--primary-color)] text-white px-6 py-3 rounded-full hover:bg-white hover:text-[var(--primary-color)] transform transition-bg duration-500">
            See All Services
          </Link>
        </div>
      </div>
      </div>
    </section>
    </>
  )
}

export default ServicesSection
