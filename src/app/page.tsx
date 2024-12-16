import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import InspirationSection from '@/components/Inspire'
import Navbar from '@/components/Nav'
import ProductList from '@/components/ProductList'
import Range from '@/components/RangeCategory'
import React from 'react'

const page = () => {
  return (
    <div>
    
     <Hero/>
     <Range/>
     <ProductList/> 
     <InspirationSection/>
    
    </div>
  )
}

export default page
