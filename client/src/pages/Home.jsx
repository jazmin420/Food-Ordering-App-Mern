import React from 'react'
import Header from '../components/Header'
import FooterComp from '../components/Footer'
import CarouselComp from '../components/Carousel'
import BgHome from '../components/BgHome'

function Home() {
  return (
    <>
    <Header/>
    <BgHome/>
    <CarouselComp/>
    <div className='mt-10'>
  

    </div>
    <FooterComp/>
    </>
  )
}

export default Home