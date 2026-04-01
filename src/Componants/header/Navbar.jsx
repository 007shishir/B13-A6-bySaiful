import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <a href="#" className="inline-flex items-end gap-1 text-2xl font-extrabold">
            <span className="text-indigo-600">Digi</span>
            <span className="text-indigo-600">Tools</span>
          </a>
        </div>
        <div className="hidden mx-auto items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
            <a href="#" className="hover:text-indigo-600">Products</a>
            <a href="#" className="hover:text-indigo-600">Features</a>
            <a href="#" className="hover:text-indigo-600">Pricing</a>
            <a href="#" className="hover:text-indigo-600">Testimonials</a>
            <a href="#" className="hover:text-indigo-600">FAQ</a>
          </div>

        <div className="flex items-center gap-3">
          <button className="hidden items-center gap-2 rounded-md border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 lg:flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6h15l-1.5 9h-13z" />
              <circle cx="9" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>
            Cart
          </button>

          <a href="#" className="text-sm font-medium text-slate-700 hover:text-indigo-600">Login</a>
          <a href="#" className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700">Get Started</a>

          <div className="lg:hidden">
            <details className="relative">
              <summary className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100"> 
                <span className="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </summary>
              <div className="absolute right-0 mt-2 w-48 rounded-lg border border-slate-200 bg-white p-2 shadow-lg">
                <a href="#" className="block rounded px-2 py-2 text-sm text-slate-700 hover:bg-slate-100">Products</a>
                <a href="#" className="block rounded px-2 py-2 text-sm text-slate-700 hover:bg-slate-100">Features</a>
                <a href="#" className="block rounded px-2 py-2 text-sm text-slate-700 hover:bg-slate-100">Pricing</a>
                <a href="#" className="block rounded px-2 py-2 text-sm text-slate-700 hover:bg-slate-100">Testimonials</a>
                <a href="#" className="block rounded px-2 py-2 text-sm text-slate-700 hover:bg-slate-100">FAQ</a>
                <a href="#" className="block rounded px-2 py-2 text-sm font-medium text-indigo-600 hover:bg-slate-100">Get Started</a>
              </div>
            </details>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
