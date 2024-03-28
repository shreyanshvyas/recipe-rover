import React from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import Login from './components/Login'
import Signup from './components/Signup'
import Search from './components/Search'

//for cards 
// import { Products } from './components/products';
//  import contents from './content';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
    <div className='w-full min-h-screen text-white bg-zinc-900'>
    {/* <Navbar/>
    <LandingPage/>
    <Marquee/> */}
    <Search/>
    </div>
  
  {/* for cards */}
  {/* <div className='App grid grid-cols-4 justify-center  bg-zinc-900'>
                {contents.map(contents => (
                    <Products 
                        key={contents.id}
                        image={contents.image}
                        name={contents.name}
                        price={contents.price}
                        totalSales={contents.totalSales}
                        discription={contents.discription}
                        rating={contents.rating}
                    />
                ))}
            </div> */}
</>
  )
}

export default App