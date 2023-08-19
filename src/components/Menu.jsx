import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/tailwind.css'
import '../assets/animations.css'
export default function Menu (){
  const handleIconClick=()=>{
        const container=document.getElementById('container');
        const section=document.getElementById('section');
        const btn=document.getElementById('button');
        const icon=document.getElementById('icon');
        //No desplegado
        if(icon.className=='text-lg bi bi-caret-left-fill'){
            btn.className='mb-5'
            icon.className='text-lg bi bi-caret-right-fill'
            container.className='z-10 animate-slide bg-primary absolute right-0 text-theme h-full w-3/12 lg:w-1/12  text-center drop-shadow-lg flex flex-col pt-3'
            section.className='flex flex-col'
        }else{
        //Desplegado
            btn.className='hover:scale-150 transition-transform text-inverse-theme mb-6'
            icon.className='text-lg bi bi-caret-left-fill' 
            container.className='z-10 animate-slide-i absolute right-0 h-full w-1/12 text-center drop-shadow-lg flex flex-col pt-3'
            section.className='hidden'
        }
	}

  return(
    <>
        <div id='container' className='z-10 absolute right-0 h-full w-3/12 lg:w-1/12 text-center drop-shadow-lg flex-inline flex-col pt-2'>
            <button id='button' className='hover:scale-150 transition-transform text-inverse-theme mb-6' onClick={()=>handleIconClick()}>
                <i id="icon" className="text-lg bi bi-caret-left-fill"></i>
            </button>
            <section id='section' className='hidden'>
                <h3 className='font-bold'>Menu</h3>
                <Link to={'/'} className='hover:font-bold font- my-1'>Home</Link>
                <Link to={'/cities'} className='hover:font-bold  font- my-1'>Cities</Link>
                <Link to={'/login'} className='hover:font-bold  font- my-1'>Login</Link>
                <Link to={'/aboutus'} className='hover:font-bold  font- my-1'>About Us</Link>
            </section>
        </div>
    </>
  )
}