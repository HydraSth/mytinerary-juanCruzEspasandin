import React from 'react';

function Header (){

  return(
    <header className='flex place-content-around mt-5'>
      <h3 className='my-auto font-bold'>My Tinerary</h3>
      <section>
        <button className='mx-3 font-bold'>Home</button>
        <button className='mx-3 font-bold'>Cities</button>
        <button className='mx-3 ps-4 pe-7 py-2 font-semibold rounded-md bg-primary text-white'>
          <i className="bi bi-person-fill me-3"></i>
          Login
        </button>
      </section>
    </header>
  )
}


export default Header;
