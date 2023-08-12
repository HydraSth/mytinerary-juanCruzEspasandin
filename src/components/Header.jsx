import React from 'react';
import { Link } from 'react-router-dom';
function Header (){

  return(
    <>
      <header className='z-10 sm:flex hidden mt-5'>
        <div className='w-full flex place-content-around'> 
          <h3 className='my-auto font-bold'>My Tinerary</h3>
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
