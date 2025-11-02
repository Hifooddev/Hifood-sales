
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-zinc-100 rounded-2xl overflow-hidden flex flex-col items-center text-center p-8 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="w-full h-56 md:h-64 mb-8 flex items-center justify-center">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <div className="flex-grow flex flex-col items-center">
        <p className="text-sm font-semibold text-orange-600">{product.category}</p>
        <h3 className="text-2xl font-bold text-zinc-900 mt-2">{product.name}</h3>
        <p className="text-zinc-600 mt-2 flex-grow">{product.tagline}</p>
        <p className="text-lg font-semibold text-zinc-800 mt-4">{product.price}</p>
      </div>
      <button className="mt-6 bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
        Order Now
      </button>
    </div>
  );
};

export default ProductCard;
