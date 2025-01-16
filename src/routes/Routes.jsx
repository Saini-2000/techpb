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

      <Route path="*" element={<NotFound />} />

    </PathRoutes>
    
    
    </>
  )
}

export default Routes
