import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/normalize.css'
import './assets/tailwind.css'
import Header from './components/Home/Header.jsx'
import Main from './components/Home/Main.jsx'
import Footer from './components/Home/Footer.jsx'

function App() {
  return (
    <div className='flex flex-col min-h-screen place-content-between bg-secondary'>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}

export default App
