import React from 'react';
import { Link } from 'react-router-dom';
function Header (){

  return(
    <>
      <header id="Header" className='bg-theme z-10 py-3 sm:flex hidden'>
        <div className='w-full flex place-content-around text-inverse-theme'> 
          <img id="Logo" src="assets/logo.png" className='h-full max-w-xs object-contain'/>
          <section>
            <Link to={'/'} className='mx-3 font-bold'>Home</Link>
            <Link to={'/cities'} className='mx-3 font-bold'>Cities</Link>
            <Link to={'/login'} className='mx-3 ps-4 pe-7 py-2 font-semibold rounded-md bg-primary text-white'>
              <i className="bi bi-person-fill me-3"></i>
              Login
            </Link>
          </section>
        </div>
      </header>
    </>
  )
}


export default Header;
