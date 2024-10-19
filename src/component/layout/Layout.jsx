import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'
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