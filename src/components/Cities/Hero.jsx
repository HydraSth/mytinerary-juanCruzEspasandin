import React from 'react'
import '../../assets/Hero.css'
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
        <div style={{backgroundImage:`url(./public/assets/bg-search.jpg)`}} className='w-full h-80 absolute top-0 bg-cover bg-center place-content-center-z-5'>
            <div style={{background:`linear-gradient(0deg, rgb(235, 235, 235) 0%, rgba(235, 235, 235, 0) 100%)`}} className='w-full h-full flex justify-center items-center'>
                <section className='color-cities flex flex-row items-center place-content-between text-theme'>
                    <section className='flex flex-col w-1/3'>
                        <h5 className='font-bold drop-shadow-md text-2xl'>Discover new places</h5>
                        <p className='drop-shadow-md text-lg font-medium'>Collection of the most beatiful places and experiences</p>
                    </section>
                    <section className='flex flex-col text-end w-1/3'>
                        <h5 className='font-bold drop-shadow-md text-2xl'>Make your intinerary</h5>
                        <p className=' drop-shadow-md text-lg font-medium'>Design and personalize your unique travel itinerary</p>
                    </section>
                </section>
            </div>
        </div>
        <Search/>
    </>
  )
}


