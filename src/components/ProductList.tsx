'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

// Define a Product interface for TypeScript
interface Product {
  image: string;
  title: string;
  description: string;
  price: string;
  oldPrice?: string;
}

// Product data
const productData: Product[] = [
  {
    image: '/product1.png',
    title: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    oldPrice: 'Rp 3.500.000',
  },
  {
    image: '/product2.png',
    title: 'Leviosa',
    description: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
  },
  {
    image: '/product3.png',
    title: 'Lolito',
    description: 'Luxury big sofa',
    price: 'Rp 7.000.000',
    oldPrice: 'Rp 14.000.000',
  },
  {
    image: '/product4.png',
    title: 'Respira',
    description: 'Outdoor bar table and stool',
    price: 'Rp 500.000',
  },
  {
    image: '/product5.png',
    title: 'Grifo',
    description: 'Night lamp',
    price: 'Rp 1.500.000',
  },
  {
    image: '/product6.png',
    title: 'Muggo',
    description: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    oldPrice: 'Rp 3.500.000',
  },
  {
    image: '/product7.png',
    title: 'Pingky',
    description: 'Cute bed set',
    price: 'Rp 7.000.000',
    oldPrice: 'Rp 14.000.000',
  },
  {
    image: '/product8.png',
    title: 'Potty',
    description: 'Minimalist flower pot',
    price: 'Rp 500.000',
  },
];

// Main Product List Component
const ProductList: React.FC = () => {
  return (
    <section className="py-10 px-4 flex items-center justify-center w-full bg-white overflow-hidden">
      <div className="w-full max-w-screen-lg flex flex-col items-center space-y-8 box-border">
        {/* Title */}
        <h1 className="text-4xl font-bold text-myblack text-center">Our Products</h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-full">
          {productData.map((product, index) => (
            <div
              key={index}
              className="relative group border border-gray-200 overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
            >
              {/* Product Image */}
              <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>

              {/* Product Content */}
              <div className="p-4">
                <h2 className="text-xl font-semibold text-myblack">{product.title}</h2>
                <p className="text-sm text-mygray">{product.description}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-lg font-semibold text-myblack">
                    {product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="line-through text-sm text-mygray">
                      {product.oldPrice}
                    </span>
                  )}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center space-y-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Button variant="primary" size="sm">
                  Add to Cart
                </Button>
                <div className="flex space-x-4">
                  <div className="text-white flex flex-col items-center">
                    <i className="fas fa-share-alt"></i>
                    <span className="text-sm">Share</span>
                  </div>
                  <div className="text-white flex flex-col items-center">
                    <i className="fas fa-exchange-alt"></i>
                    <span className="text-sm">Compare</span>
                  </div>
                  <div className="text-white flex flex-col items-center">
                    <i className="fas fa-heart"></i>
                    <span className="text-sm">Save</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <Button
          variant="products"
          size="xs"
          className="bg-[#B88E2F] text-white hover:bg-[#B88E2F]/80 mt-6"
        >
          Show More
        </Button>
      </div>
    </section>
  );
};

export default ProductList;


