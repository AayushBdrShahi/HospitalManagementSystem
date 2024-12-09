import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Testimonial from '../components/Testimonial'

const Home = () => {
  return (
    <div>
      <Header/>
      <SpecialityMenu/>
      <TopDoctors/>
      <Testimonial/>
    </div>
  )
}

export default Home
