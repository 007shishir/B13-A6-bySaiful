import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const EmptyCart = () => {
    return (
        <div className="flex items-center justify-center min-h-96 bg-gray-50 px-4">
            <div className="text-center max-w-md">
                {/* Empty Cart Icon */}
                <div className="flex justify-center mb-6">
                    <div className="bg-gray-200 rounded-full p-6">
                        <FiShoppingCart className="w-16 h-16 text-gray-500" />
                    </div>
                </div>

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    No Product is Choosen
                </h2>

                {/* Description */}
                <p className="text-base text-gray-600 mb-8">
                    Please choose a product.
                </p>
            </div>
        </div>
    );
};

export default EmptyCart;