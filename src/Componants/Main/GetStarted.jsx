import React from 'react';

const steps = [
  {
    id: '01',
    title: 'Create Account',
    description: 'Sign up for free in seconds. No credit card required to get started.',
    icon: '👤',
  },
  {
    id: '02',
    title: 'Choose Products',
    description: 'Browse our catalog and select the tools that fit your needs.',
    icon: '📦',
  },
  {
    id: '03',
    title: 'Start Creating',
    description: 'Download and start using your premium tools immediately.',
    icon: '🚀',
  },
];

const GetStarted = () => {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
            Get Started
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Get Started In 3 Steps
          </h2>
          <p className="mt-4 text-sm text-slate-500 sm:text-base">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;