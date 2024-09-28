import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const EmptyCart: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64 bg-gray-100 rounded-lg p-8">
      <ShoppingCartIcon className="w-16 h-16 text-gray-400 mb-4" />
      <h3 className="text-xl font-semibold text-gray-700 mb-2">
        Your cart is empty
      </h3>
      <p className="text-gray-500 mb-6 text-center">
        Looks like you haven't added any items to your cart yet.
      </p>
      <Link
        to="/products"
        className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300 flex items-center"
      >
        <ShoppingCartIcon className="w-5 h-5 mr-2" />
        Continue Shopping
      </Link>
    </div>
  );
};

export default EmptyCart;