import Destinations from '@/components/homePage/Destinations'
import HeroSection from '@/components/homePage/HeroSection'
import HolidayCategory from '@/components/homePage/HolidayCetegory'
import HolidayPackages from '@/components/homePage/HolidayPackeges'
import PopularDestinations from '@/components/homePage/PopularDestinations'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/footer/Footer'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <HolidayCategory/>
      <HolidayPackages/>
      <Destinations/>
      <PopularDestinations/>
      <Footer/>
    </div>
  )
}

export default Home
