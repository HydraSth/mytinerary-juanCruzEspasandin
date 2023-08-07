import Header from '../Header.jsx'
import Footer from '../Footer.jsx'
import Menu from '../Menu.jsx'
import React from 'react'

export default function Home(){
  return (
    <>
        <Header/>
        <Menu/>
        <h1 className='text-2xl text-primary font-bold flex place-content-center'>Cities page</h1>
        <Footer/>
    </>
  )
}


