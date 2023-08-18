import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({name,photo,country}){
  return(
        <div style={{ backgroundImage: `url(${photo})`, backgroundSize: 'cover',borderRadius:'10px'}} className='z-10 mx-2 basis-1/2 drop-shadow-lg md:basis-1/3 lg:basis-0 inline-block'> 
            <div style={{ background:'linear-gradient(180deg, rgba(0,0,0,0.6491596638655462) 0%, rgba(0,0,0,0) 100%)',borderRadius:'10px'}} className='flex place-content-between flex-col w-60 h-40'>
              <section className='p-2 ps-3 flex-col'>
                  <h6 className='text-white lg:text-md'>{name}</h6>
                  <h6 className="bi bi-geo-alt-fill text-xs text-slate-50"> {country}</h6>
              </section>
              <div className='m-2 bg-primary text-white w-fit px-2 py-1 rounded-md'>
                <Link className='text-sm font-medium' to={`/cities/${name}`}>View more</Link>
              </div>
            </div>
        </div>
  )
}
