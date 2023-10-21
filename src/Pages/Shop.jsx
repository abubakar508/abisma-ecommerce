import React from 'react'
import HeroDetails from '../Components/HeroDetails'
import Trending from '../Components/Trending'
import African from '../Components/African'
import Custom from '../Components/Custom'
import Couples from '../Components/Couples'
import Slickcarousel from '../Components/Slickcarousel'
import Muslimoffers from '../Components/Muslimoffers'
import Brands from '../Components/Brands'
import { Carousel } from '../Components/Carousel'
import Promo from '../Components/Promo'
import Offers from '../Components/Offers'


function Shop() {
  return (
    <div className=' md:m-20'>
      <Carousel />
      <Promo />
        <HeroDetails/>
        <Trending/>
        <African/>
        <Offers/>
        <Slickcarousel/>
        <Custom/>
        <Couples/>
        <Muslimoffers/>
        <Brands/>
        
        
    </div>
  )
}

export default Shop