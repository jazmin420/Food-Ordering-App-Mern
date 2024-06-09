import React from 'react'
import bgFood from '../assets/bgFood.png'
import { FaSearch } from "react-icons/fa";
import { TextInput } from 'flowbite-react';

function BgHome() {
  return (
    <>
    <div className='flex justify-center p-5 items-center bg-gradient-to-br flex-wrap border bg-black'>     
      <img src={bgFood} alt="" className='w-[400px] lg:w-1/4 max-h-[700px] object-cover p-3' />
      <div className='p-4'>
        <h1 className='font-bold text-4xl text-app-color text-center w-full mb-6 '>Discover the best food & drinks here...</h1>
        <form action="">
        <TextInput  type="text" placeholder="Search by city or place" rightIcon={FaSearch}/>
        </form>
      </div>
    </div>
    </>
  )
}

export default BgHome