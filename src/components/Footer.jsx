import React from 'react';
import { Link } from 'react-router-dom';

function Footer (){

  return(
    <div className='flex flex-col gap-3 text-xs font-bold text-inverse-theme/70 items-center p-1 dark:bg-dark-primary dark:text-dark-secondary sm:place-content-between sm:flex-row'>
      <h6>My Tinerary © 2022</h6>
      <section>
        <Link className="hover:text-theme mx-1" to="/">Home</Link>
        <Link className="hover:text-theme mx-1" to="/cities">Cities</Link>
        <Link className="hover:text-theme mx-1" to="/cities">Policy</Link>
        <Link className="hover:text-theme mx-1" to="/cities">Contact</Link>
      </section>
    </div>
  )
}


export default Footer;
