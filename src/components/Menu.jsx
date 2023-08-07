import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/animations.css'
export default function Menu (){
  const handleIconClick=()=>{
        const container=document.getElementById('container');
        const section=document.getElementById('section');
        const btn=document.getElementById('button');
        const icon=document.getElementById('icon');
        //No desplegado
        if(icon.className=='text-lg bi bi-list'){
            btn.className='mb-5 '
            icon.className='bi bi-list-nested'
            container.className='animate-slide bg-primary absolute  right-0 text-white h-full w-3/12 lg:w-1/12  text-center drop-shadow-lg flex flex-col pt-10'
            section.className='flex flex-col'
        }else{
        //Desplegado
            btn.className='text-primary hover:scale-150 transition-transform'
            icon.className='text-lg bi bi-list' 
            container.className='animate-slide-i absolute right-0 h-full w-1/12 text-center drop-shadow-lg flex flex-col pt-10'
            section.className='hidden'
        }
	}

  return(
    <>
        <div id='container' className='absolute right-0 h-full w-3/12 lg:w-1/12 text-center drop-shadow-lg flex-inline flex-col pt-10'>
            <button id='button' className='hover:scale-150 transition-transform text-primary mb-6' onClick={()=>handleIconClick()}>
                <i id='icon' className="text-lg bi bi-list"></i>
            </button>
            <section id='section' className='hidden'>
                <h3 className='font-bold'>Menu</h3>
                <Link to={'/'} className='font- my-1'>Home</Link>
                <Link to={'/cities'} className='font- my-1'>Cities</Link>
                <Link to={'/login'} className='font- my-1'>Login</Link>
                <Link to={'/aboutus'} className='font- my-1'>About Us</Link>
            </section>
        </div>
    </>
  )
}
