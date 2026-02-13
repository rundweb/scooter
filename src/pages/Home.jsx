import React from 'react'
import Navbar from '../components/layout/Navbar'
import Hero from '../components/sections/Hero'
import Category from '../components/sections/Category'
import Articles from '../components/sections/Articles'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Category/>
      <Articles/>
    </div>
  )
}

export default Home
