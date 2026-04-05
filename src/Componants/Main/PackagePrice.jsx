import React from 'react';
import PackagePriceCard from './PackagePriceCard';

const PackagePrice = () => {
    const packages = [
        {
            id: 1,
            name: 'Starter',
            price: '$0',
            description: 'Perfect for getting started',
            popular: false,
            features: [
                'Access to 10 free tools',
                'Basic templates',
                'Community support',
                '1 project per month'
            ],
            buttonText: 'Get Started Free',
            buttonClass: 'btn-primary'
        },
        {
            id: 2,
            name: 'Pro',
            price: '$29',
            description: 'Best for professionals',
            popular: true,
            features: [
                'Access to all premium tools',
                'Unlimited templates',
                'Priority support',
                'Unlimited projects',
                'Cloud sync',
                'Advanced analytics'
            ],
            buttonText: 'Start Pro Trial',
            buttonClass: 'btn-outline btn-primary'
        },
        {
            id: 3,
            name: 'Enterprise',
            price: '$99',
            description: 'For teams and businesses',
            popular: false,
            features: [
                'Everything in Pro',
                'Team collaboration',
                'Custom integrations',
                'Dedicated support',
                'SLA guarantee',
                'Custom branding'
            ],
            buttonText: 'Contact Sales',
            buttonClass: 'btn-primary'
        }
    ];

    return (
        <section className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        Simple, Transparent Pricing
                    </h1>
                    <p className="text-lg text-gray-600">
                        Choose the plan that fits your needs. Upgrade or downgrade anytime.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
                    {packages.map((pkg) => (
                        <PackagePriceCard key={pkg.id} pkg={pkg} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PackagePrice;