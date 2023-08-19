import React from 'react';

export default function ErrorCard(){
  return(
        <div className=' mx-2 basis-1/2 drop-shadow-lg md:basis-1/3 lg:basis-0'> 
            <div className='bg-theme rounded-lg flex place-content-between flex-col w-60 h-40'>
              <section className='text-inverse-theme bg-contain bg-[url(assets/x-error.png)] bg-no-repeat bg-center p-2 ps-3 flex-col flex place-items-center place-content-center h-full'>
                  <h4 className= 'lg:text-md font-bold text-2xl'>Not Found</h4>
                  <h6 className='lg:text-md font-normal'>Try again with <span className='text-primary font-bold'>Shanghai</span></h6>
              </section>
            </div>
        </div>
  )
}
