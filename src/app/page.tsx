import Hero from '@/components/Hero'
import InspirationSection from '@/components/Inspire'
import ProductList from '@/components/ProductList'
import Range from '@/components/RangeCategory'
import React from 'react'

const Page: React.FC = () => {
  return (
    <>
    <div className="mt-8 lg:mt-12">
  <Hero />
</div>

<div className="mt-8 lg:mt-12">
  <Range />
</div>

<div className="mt-8 lg:mt-12">
  <ProductList />
</div>

<div className="mt-8 lg:mt-12">
  <InspirationSection />
</div>
</>
  )
}

export default Page


