import React from 'react';

export default function Citys({name, link,photo}){
  return(
        <div className='md:basis-1/3 lg:basis-0 p-3 inline-block'> 
            <button style={{ backgroundImage: `url(${photo})`, backgroundSize: 'cover'}} className='hover:border-primary hover:border-2 rounded mx-auto basis-1/2 flex flex-col place-content-end w-40 h-40 drop-shadow-lg'>
                    <h6 className='font-bold text-secondary opacity-100 bg-primary shadow-sm w-full rounded-t-2xl text-lg lg:text-lg'>{name}</h6>
            </button>
        </div>
  )
}
