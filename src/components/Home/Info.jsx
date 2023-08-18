import React from 'react';
import { Link } from 'react-router-dom';

export default function Info (){

  return(
    <>
      <div id="info" className='flex flex-col md:flex-row place-content-center w-10/12 mx-auto mt-5 text-theme'>
          <section className='md:mx-1 mx-auto w-1/2 lg:w-2/3 '>
            <h1 className='text-5xl font-bold drop-shadow-lg'>Find the perfect destination</h1>
            <p className='text-lg text-justify font-medium mb-3 drop-shadow-lg w-10/12'>Our app will help you find the perfect path for your next trip. With an easy to use interface and a host of itinerary options, planning your next trip has never been easier.</p>
            <Link className='transition duration-300 px-2 text-center ease-in-out py-2 block font-semibold rounded-md md:my-2 my-5 border-2 bg-white border-white hover:border-primary hover:bg-primary hover:text-white text-inverse-theme shadow-lg md:w-3/6 w-10/12' to={'./cities'}>View more</Link>
          </section>
          <section className='md:mx-1 mx-auto w-1/2 lg:w-1/3 my-auto'>
            <h2 className='text-5xl font-bold'>Argentina</h2>
            <h3 className='text-2xl mt-3 font-medium opacity-40 -translate-x-6'>Río Negro</h3>
          </section>
      </div>
    </>
  )
}
