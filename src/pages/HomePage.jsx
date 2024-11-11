import React from 'react'
import ProductSlider from '../component/ProductSlider'
import FeatureCard from '../component/uiComponets/FeatureCard'
import ProductDisplaySection from '../component/uiComponets/ProductDisplaySection'

const HomePage = ({product}) => {
  return (
    <>
    <ProductSlider/>
    <FeatureCard/>
    <ProductDisplaySection/>
   </>
  )
}

export default HomePage