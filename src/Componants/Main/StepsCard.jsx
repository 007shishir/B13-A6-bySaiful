import React, { use } from 'react';
import { FaUser, FaBox, FaRocket } from 'react-icons/fa';

const iconMap = {
  person: FaUser,
  box: FaBox,
  rocket: FaRocket,
};

const StepsCard = ({stepsPromise}) => {

    const stepsData = use(stepsPromise);
    const { onboarding_process } = stepsData;
    console.log(onboarding_process);
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
          <div className="grid gap-6 lg:grid-cols-3">
            {onboarding_process.map((step) => {
              const IconComponent = iconMap[step.icon_theme] || FaUser;
              return (
              <article
                key={step.step}
                className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 text-sm font-semibold text-white shadow-lg shadow-violet-600/20">
                  {step.step}
                </span>

                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-violet-100 text-3xl text-violet-600">
                  <IconComponent size={28} />
                </div>

                <h3 className="mt-8 text-xl font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{step.description}</p>
              </article>
              );
            })}
          </div>
        </div>
    );
};

export default StepsCard;