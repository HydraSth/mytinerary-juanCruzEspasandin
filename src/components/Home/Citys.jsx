import React from 'react';

export default function Citys({name, link,photo}){
  return(
        <div className='basis-1/2 p-3 inline-block'> 
            <button style={{ backgroundImage: `url(${photo})`, backgroundSize: 'cover'}} className='rounded basis-1/2 w-40 h-40 border-indigo-600 border-b-4 drop-shadow-lg'>
                    <h6 className='opacity-50 font-black text-white text-lg lg:text-2xl'>{name}</h6>
            </button>
        </div>
  )
}
