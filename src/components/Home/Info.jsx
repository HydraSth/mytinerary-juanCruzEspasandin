import React from 'react';
import { Link } from 'react-router-dom';

export default function Info (){

  return(
    <>
      <div id="info" className='flex flex-col md:flex-row place-content-center mt-5'>
          <section className='md:mx-1 mx-auto w-1/2 lg:w-1/3 '>
            <h1 className='text-2xl font-bold'>Find the perfect destination</h1>
            <p className='mb-3'>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
            <Link className='transition duration-300 px-2 text-center ease-in-out py-2 block font-semibold rounded-md md:my-2 my-5 border-2 border-primary hover:bg-primary hover:text-white text-primary shadow-lg md:w-3/6 w-10/12' to={'./cities'}>View more</Link>
          </section>
          <div className='md:w-1/4 my-3 w-screen flex place-content-center '>
            <img src="./src/assets/react.svg" className='w-1/3'/>
          </div>
      </div>
    </>
  )
}
