import React from 'react'
import './Hero.css'
import Search from './Search';
export default function Hero(){
    const handleInput=()=>{
        const search_input= document.getElementById('city-search');
        if(search_input.value==""){
            icon.className=''
        }else{
           icon.className='hidden'
        }
    }
    return (
    <>
        <div style={{backgroundImage:`url('https://images.ecestaticos.com/YeWUdVtOskDuwn_vTMyiIEK8gHI=/117x0:1972x1391/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F9bf%2F490%2F61d%2F9bf49061d1738ec4342cb7ad42214fdb.jpg')`}} className='w-full h-80 absolute top-0 bg-cover bg-center place-content-center-z-5'>
            <div style={{background:`linear-gradient(0deg, rgb(235, 235, 235) 0%, rgba(235, 235, 235, 0) 100%)`}} className='w-full h-full flex justify-center items-center'>
                <section className='color-cities flex flex-col items-center'>
                    <h5 className='font-bold drop-shadow-md text-2xl'>Cities</h5>
                    <p className='w-2/3 drop-shadow-md text-lg font-medium'>Collection of the most beatiful places and experiences</p>
                </section>
            </div>
        </div>
        <Search/>
    </>
  )
}


