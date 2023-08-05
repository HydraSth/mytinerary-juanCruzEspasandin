import React from 'react';

export default function Info (){

  return(
    <>
      <div className='flex place-content-center mt-5'>
          <section className='w-1/2  lg:w-1/3 '>
            <h1 className='text-2xl font-bold'>Find the perfect destination</h1>
            <p>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
            <button className='mt-3 px-10 py-2 font-semibold rounded-md bg-primary text-white'>View more</button>
          </section>
          <div className='w-1/4 flex place-content-center'>
            <img src="./src/assets/react.svg" className='w-1/3'/>
          </div>
      </div>
    </>
  )
}
