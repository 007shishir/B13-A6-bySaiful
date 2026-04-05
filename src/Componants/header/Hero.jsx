import React from "react";
import banner from '../../assets/banner.png';

const Hero = () => {
  return (
    <header className="bg-white mx-auto py-12 sm:py-16 lg:py-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:px-8">
        <div className="max-w-xl text-center lg:text-left">
          <span className="inline-flex rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700">
            New: AI-Powered Tools Available
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
            Supercharge Your Digital Workflow
          </h1>
          <p className="mt-5 text-base text-slate-600 sm:text-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
            >
              Explore Products
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-indigo-600 px-8 py-3 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
            >
              Watch Demo
            </a>
          </div>
        </div>

        <div className="w-[400px]  max-w-md lg:max-w-xl">
          <img
            src={banner}
            alt="AI workflow illustration"
            className="h-full w-full rounded-2xl border border-slate-200 object-cover shadow-xl"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
