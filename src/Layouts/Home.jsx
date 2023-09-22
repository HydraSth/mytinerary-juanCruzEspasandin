import React from 'react'
import Header from '../components/Header.jsx'
import Menu from '../components/Menu.jsx'
import Info from '../components/Home/Info.jsx';
import Trends from '../components/Home/Trends.jsx';
import Footer from '../components/Footer.jsx'

export default function Home(){

  return (
    <>
    <div id='Home' className='flex flex-col h-screen place-content-between'>
        <Header/>
        <Menu/>
        <Info/>
        <div>
          <Trends/>
          <Footer/>
        </div>
    </div>
    </>
  )
}


