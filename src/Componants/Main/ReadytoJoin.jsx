import React from 'react';

const ReadytoJoin = () => {
    return (
        <section className="w-full py-24 px-4 bg-gradient-to-r from-purple-600 to-purple-800">
            <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
                    Ready To Transform Your Workflow?
                </h2>

                {/* Subtitle */}
                <p className="text-base sm:text-lg text-purple-100 mb-10 max-w-2xl">
                    Join thousands of professionals who are already using Digitools to work smarter.
                    Start your free trial today.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <button className="btn btn-lg bg-white text-purple-600 hover:bg-gray-100 border-white font-semibold">
                        Explore Products
                    </button>
                    <button className="btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-purple-600 font-semibold">
                        View Pricing
                    </button>
                </div>

                {/* Trial Info */}
                <p className="text-sm sm:text-base text-purple-100">
                    14-day free trial • No credit card required • Cancel anytime
                </p>
            </div>
        </section>
    );
};

export default ReadytoJoin;