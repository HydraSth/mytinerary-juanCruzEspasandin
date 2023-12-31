import React from 'react'
import Header from '../components/Header.jsx'
import Menu from '../components/Menu.jsx'
import Hero from '../components/Cities/Hero.jsx'
import Footer from '../components/Footer.jsx'
import '../assets/Hero.css'
import Search from '../components/Cities/Search.jsx'

export default function Cities(){
  return (
    <>
        <Menu/>
        <div>
        <Header/>
        <Hero/>
        </div>
        <Search/>
    </>
  )
}


