import React from 'react';

const StepsSection = () => {
  const steps = [
    {
      number: '1',
      title: 'Share your vision.',
      description: 'Tell us about your idea or project goals—no technical expertise required.',
    },
    {
      number: '2',
      title: 'Watch your design come to life.',
      description: 'Get an AI-powered draft within seconds, perfectly tailored to your needs.',
    },
    {
      number: '3',
      title: 'Refine with ease.',
      description: 'Collaborate and iterate with intuitive tools to make it just right.',
    },
    {
      number: '4',
      title: 'Launch with confidence.',
      description: 'Deploy your website with a single click and start sharing it with the world.',
    },
  ];

  return (
    <div className="md:w-4/5 mx-auto">
      {/* Main Heading */}
      <h1 className="text-3xl md:text-5xl font-bold leading-relaxed mb-4">
        From <span className="text-primary">idea</span> to <span className="text-primary">app</span> in seconds.
      </h1>

      {/* Subheading */}
      <p className="font-light lg:w-2/3 mb-8">
        Describe your idea, and let our AI handle the rest. Creating for the web has never been faster or easier.
      </p>

      {/* Steps Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="p-4 rounded-xl border transition-transform transform hover:scale-105"
          >
            {/* Step Number */}
            <div className="w-12 h-12 flex items-center justify-center bg-primary text-white font-bold rounded-full mb-4">
              {step.number}
            </div>
            {/* Step Title */}
            <h3 className="text-lg font-semibold uppercase mb-2">{step.title}</h3>
            {/* Step Description */}
            <p className="text-sm font-light">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsSection;
