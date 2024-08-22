import React from 'react'
import Hero from '../../components/hero/Hero'
import Shops from '../../components/shops/Shops'
import Pro from '../../components/pro/Pro'
import Banner from '../../components/banner/Banner'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Shops/>
        <Pro/>
        <Banner/>
    </div>
  )
}

export default Home