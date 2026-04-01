import React from 'react';

const ToolsHeader = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
          Premium Digital Tools
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-slate-500 sm:text-base">
          Choose from our curated collection of premium digital products designed to
          boost your productivity and creativity.
        </p>

        <div className="mt-6 flex items-center gap-3">
          <button className="rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700">
            Products
          </button>
          <button className="rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
            Cart (2)
          </button>
        </div>
      </div>
    </section>
  );
};

export default ToolsHeader;