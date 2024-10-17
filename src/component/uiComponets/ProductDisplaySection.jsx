import React from 'react'

const ProductCard = ()=>{
    return(
        <div className='flex flex-col m-2 items-center justify-center'>
            <img className='h-[60%]' src='https://tse2.mm.bing.net/th?id=OIP.Sw8FwLprk_XhMYBDpIBucQHaFg&pid=Api&P=0&h=220' alt='' />
            <h2 className='mt-1 text-2xl font-semibold'>Product Name</h2>
            <p className='text-gray-600'>product des </p>
        </div>
    )
}

const ProductDisplaySection = () => {
  return (
    <div className=' grid p-5 grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 border-2 mx-auto border-gray-400 bg-white rounded-xl w-[80vw] min-h-[50vh]'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    </div>
  )
}

export default ProductDisplaySection