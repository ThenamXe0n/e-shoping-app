import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getProduct ,addProduct} from '../../redux/productSlice'
const Layout = () => {
  const dispatch = useDispatch()
  return (
   <>
    <NavBar/>
    <button onClick={()=>{dispatch(addProduct({product:{product:"watch",brand:"casio"}}))}} className='bg-red-700 text-6 absolute z-[988888888]' >click me </button>
    <main className='min-h-[80vh] mt-20'>
     <Outlet/>
    </main>
    <Footer/>
   </>
  )
}

export default Layout