import React from 'react';

const UserN = () => {
  const stats = [
    { value: '50K+', label: 'Active Users' },
    { value: '200+', label: 'Premium Tools' },
    { value: '4.9+', label: 'Rating' },
  ];

  return (
    <section className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 py-12">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-10">
            {stats.map((stat, idx) => (
              <div key={stat.label} className="flex items-center gap-32">
                {/* <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-2xl font-extrabold text-white shadow-lg">
                  {stat.value}
                </div> */}
                <div className="text-left">
                  <p className="text-2xl text-white font-extrabold sm:text-3xl">{stat.value}</p>
                  <p className="text-sm text-white/80">{stat.label}</p>
                </div>
                {idx < stats.length - 1 && (
                  <span className="hidden h-10 w-px bg-white/30 sm:inline-block" />
                )}
              </div>
            ))}
          </div>
    </section>
  );
};

export default UserN;