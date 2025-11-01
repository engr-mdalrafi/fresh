import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Collection from '../components/Collection'
import BestFashion from '../components/BestFashion'
import BestSeller from '../components/BestSeller'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Collection/>
      <BestFashion/>
      <BestSeller/>
    </>
  )
}

export default Home
