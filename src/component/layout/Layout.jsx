import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
const Layout = () => {
  return (
   <>
    <NavBar/>
    <main className='min-h-[80vh] max-w-screen'>
     <Outlet/>
    </main>
    <Footer/>
   </>
  )
}

export default Layout