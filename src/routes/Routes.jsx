import React from 'react'
import {  Route, Routes  as PathRoutes} from 'react-router-dom'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Work from '../pages/Work'
import CategoryWork from '../pages/CategoryWork'
import WorkItem from '../pages/WorkItem'
import ContactUs from '../pages/ContactUs'
import ThankYou from '../pages/ThankYou'
import AboutUs from '../pages/AboutUs'
import ScrollToTop from './ScrollToTop'
import NotFound from '../pages/NotFount'
import ErpnextDetails from '../component/OurService/ErpnextDetails'
import EcommercePage from '../component/OurService/Ecommerce'
import DigitalMarketingServices from '../component/Slider/DigitalMarketing'
import HRMSDetails from '../component/Slider/hrms'
import CRMDetails from '../component/Slider/crm'
import RetailServicesDetails from '../component/Slider/retail'
import ERPNextHealthcareSolution from '../component/Slider/healthcare'
import ERPNextManufacturingSolution from '../component/Slider/manufacture'
import ERPNextBusinessConsultancy from '../component/Slider/BusinessConsultancy'
import ERPNextEducation from '../component/Slider/Education'
import POSDetails from '../component/OurService/PointOfSale'


const Routes = () => {
  return (
    <>
    
      <ScrollToTop/>
    <PathRoutes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about-us" element={<AboutUs/>}></Route>
      <Route path="/contact-us" element={<ContactUs/>}></Route>
      <Route path="/thankyou" element={<ThankYou/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/work" element={<Work/>}/>
      <Route path="/work/:name" element={<CategoryWork/>}/>
      <Route path="/workItem/:id" element={<WorkItem/>}/>
      <Route path="/ErpNextDetails" element={<ErpnextDetails/>}/>
      <Route path="/Ecommerce" element={<EcommercePage/>}/>
      <Route path="/DigitalMarketing" element={<DigitalMarketingServices />} />
      <Route path="/hrms" element={<HRMSDetails />} />
      <Route path="/crm" element={<CRMDetails />} />
      <Route path="/retail" element={<RetailServicesDetails/>} />
      <Route path="/healthcare" element={<ERPNextHealthcareSolution/>} />
      <Route path="/manufacture" element={<ERPNextManufacturingSolution/>} />
      <Route path="/BusinessConsultancy" element={<ERPNextBusinessConsultancy/>} />
      <Route path="/Education" element={<ERPNextEducation/>} />
      <Route path="/PointOfSale" element={<POSDetails/>} />


      <Route path="*" element={<NotFound />} />

    </PathRoutes>
    
    
    </>
  )
}

export default Routes
