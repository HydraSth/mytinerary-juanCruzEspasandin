import React from 'react';
import Info from './Info';
import Trends from './Trends';
export default function Main (){

  return(
    <>
      <Info/>
      {/* <button className='transition duration-300 ease-in-out px-10 py-2 block mx-auto font-semibold rounded-md md:my-2 my-5 border-2 border-primary hover:bg-primary hover:text-white text-primary shadow-lg md:w-1/6 w-5/12'>Get started</button> */}
      <Trends/>
    </>
  )
}

