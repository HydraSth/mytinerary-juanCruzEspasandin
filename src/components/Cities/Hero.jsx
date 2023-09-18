import React from 'react'
import '../../assets/Hero.css'

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
        <div style={{backgroundImage:`url(assets/bg-search.jpg)`}} className='w-full h-80 top-0 pt-10 bg-cover bg-right md:bg-center place-content-center-z-5'>
            <div style={{background:`linear-gradient(0deg, rgb(235, 235, 235) 0%, rgba(235, 235, 235, 0) 100%)`}} className='w-full h-full flex justify-center items-center'>
                <section className='color-cities flex flex-row items-center place-content-center md:place-content-between text-theme gap-5'>
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
    </>
  )
}


