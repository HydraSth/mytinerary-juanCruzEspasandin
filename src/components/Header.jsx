import React, { useReducer } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function Header (){
  const isLoged=useSelector((state)=>state.user_reducer.logged);
  return(
    <>
      <header id="Header" className='bg-theme h-12 z-10 py-3 sm:flex hidden'>
        <div className='w-full flex place-items-center place-content-around text-inverse-theme'> 
          <img id="Logo" src="assets/fav_ico.png" className='h-full max-w-xs object-contain'/>
          <section className='text-sm'>
            <Link to={'/'} className='mx-3 font-bold'>Home</Link>
            <Link to={'/cities'} className='mx-3 font-bold'>Cities</Link>
            {
              isLoged?
                <button onClick={()=>{localStorage.clear();window.location.reload()}} className='mx-3 px-4 py-2 font-semibold rounded-md bg-rose-400 text-white'>
                  Logout
                </button>
              :
                <Link to={'/login'} className='mx-3 px-4 py-2 font-semibold rounded-md bg-primary text-white'>
                  Login
                </Link>
            }
             
          </section>
        </div>
      </header>
    </>
  )
}


export default Header;
