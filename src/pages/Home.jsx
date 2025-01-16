import React from 'react'
import HeroSection from '../component/Home/HeroSection'
import MainCrousal from '../component/Home/MainCrousal'
import ServicesSection from '../component/Home/ServicesSection'
import SocialLinks from '../component/Home/SocialLinks'
import CustomerReviews from '../component/Home/CustomerReviews'
const Home = () => {
  return (
   <>
<div className=''>
   <HeroSection/>
   <MainCrousal/>
   <ServicesSection/>
   <SocialLinks/>
   <CustomerReviews/>
   </div>
   </>
  )
}

export default Home
