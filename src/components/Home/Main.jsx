import React from 'react';
import Info from './Info';
import Trends from './Trends';
export default function Main (){

  return(
    <>
      <Info/>
      <button className='px-10 py-2 block mx-auto font-semibold rounded-md bg-primary text-white w-1/6'>CTA</button>
      <Trends/>
    </>
  )
}

