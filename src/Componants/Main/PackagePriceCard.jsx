import React from 'react';

const PackagePriceCard = ({ pkg }) => {
    return (
        <div>
            <div
                            key={pkg.id}
                            className={`relative flex flex-col h-full ${
                                pkg.popular ? 'md:scale-105 md:shadow-2xl' : ''
                            }`}
                        >
                            {/* Card */}
                            <div
                                className={`card h-full ${
                                    pkg.popular
                                        ? 'bg-gradient-to-br from-purple-600 to-purple-700 text-white shadow-xl'
                                        : 'bg-white text-gray-900 shadow-md hover:shadow-lg'
                                } transition-all duration-300 hover:-translate-y-1`}
                            >
                                {/* Popular Badge */}
                                {pkg.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="badge badge-warning gap-2 text-sm font-semibold">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <div className="card-body flex flex-col">
                                    {/* Plan Name */}
                                    <h2 className="card-title text-2xl font-bold">
                                        {pkg.name}
                                    </h2>
                                    <p className={`text-sm ${pkg.popular ? 'text-purple-100' : 'text-gray-600'}`}>
                                        {pkg.description}
                                    </p>

                                    {/* Price */}
                                    <div className="my-6">
                                        <span className="text-4xl font-bold">{pkg.price}</span>
                                        <span className={`text-lg ${pkg.popular ? 'text-purple-100' : 'text-gray-600'}`}>
                                            /Month
                                        </span>
                                    </div>

                                    {/* Features */}
                                    <ul className="space-y-3 mb-8 flex-grow">
                                        {pkg.features.map((feature, index) => (
                                            <li key={index} className="flex items-center gap-3">
                                                <svg
                                                    className={`w-5 h-5 flex-shrink-0 ${
                                                        pkg.popular ? 'text-green-300' : 'text-green-500'
                                                    }`}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                                <span className="text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Button */}
                                    <div className="card-actions">
                                        {pkg.popular ? (
                                            <button className="btn btn-outline btn-lg w-full text-white border-white hover:bg-white hover:text-purple-600">
                                                {pkg.buttonText}
                                            </button>
                                        ) : (
                                            <button className="btn btn-primary btn-lg w-full">
                                                {pkg.buttonText}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
        </div>
    );
};

export default PackagePriceCard;