import React from 'react'
import { Carousel } from "flowbite-react";
import CarouselImg1 from '../assets/CarouselImg1.jpg';
import CarouselImg2 from '../assets/CarouselImg2.jpg';
import CarouselImg3 from '../assets/carouselImg3.jpg';

function CarouselComp() {
  return (
    <>
    <div className="m-10 h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img src={CarouselImg1} alt="" />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img src={CarouselImg2} alt="" />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <img src={CarouselImg3} alt="" />
        </div>
      </Carousel>
    </div>
    </>
  )
}

export default CarouselComp