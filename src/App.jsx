import React from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
    <Navbar/>
    <LandingPage/>
    <Marquee/>
    </div>
  )
}

export default App