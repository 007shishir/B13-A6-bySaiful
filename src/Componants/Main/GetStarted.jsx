import React, { Suspense } from "react";
import StepsCard from "./StepsCard";

const onBoardingSteps = async () => {
  const res = await fetch("/onboardingSteps.json");
  return await res.json();
};

const GetStarted = () => {
  const stepsPromise = onBoardingSteps();

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

      <Suspense fallback={<div>Loading...</div>}>
        <StepsCard stepsPromise={stepsPromise} />
      </Suspense>
    </section>
  );
};

export default GetStarted;
