import Hero from '@/components/Hero'
import InspirationSection from '@/components/Inspire'
import ProductList from '@/components/ProductList'
import Range from '@/components/RangeCategory'
import React from 'react'

const Page: React.FC = () => {
  return (
    <div>
      <div className="mt-8">
        <Hero />
      </div>
      
      <div className="mt-8">
        <Range />
      </div>

      <div className="mt-8">
        <ProductList />
      </div>

      <div className="mt-8">
        <InspirationSection />
      </div>
    </div>
  )
}

export default Page


