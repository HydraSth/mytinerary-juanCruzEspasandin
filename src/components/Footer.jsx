import React from 'react';
import { Link } from 'react-router-dom';

function Footer (){

  return(
    <div className='flex place-content-between flex-col sm:flex-row bg-gray-700 h-footer m-o p-0 text-xs font-bold text-white'>
      <h6 className='m-3'>My Tinerary © 2022</h6>
      <section className='m-3'>
        <Link className="underline underline-offset-2 mx-1" to="/">Home</Link>
        <Link className="underline underline-offset-2 mx-1" to="/cities">Cities</Link>
        <Link className="underline underline-offset-2 mx-1" to="/cities">Policy</Link>
        <Link className="underline underline-offset-2 mx-1" to="/cities">Contact</Link>
      </section>
      <h6 className='flex m-3'>Another direction in footer, 2034</h6>
    </div>
  )
}


export default Footer;
