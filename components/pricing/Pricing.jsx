import React from 'react';

const Pricing = () => {
  const plans = [
    {
      title: "Free Tier",
      price: "$0/mo",
      description: "Start Exploring GPTrush with 100+ completions and limited UI templates.",
      features: [
        "100+ completions",
        "Limited UI templates",
        "AI Vision",
      ],
      buttonText: "Sign up for free",
      highlight: false, // Not highlighted
    },
    {
      title: "Pay as You Go",
      price: "$9 / 1M tokens",
      description: "For professionals: unlimited completions and full range of UI templates.",
      features: [
        "Unlimited completions",
        "Full range of UI templates",
        "Fine-tuned AI Vision",
      ],
      buttonText: "Select Plan",
      highlight: true, // Highlight this plan
    },
  ];

  return (
    <div className="mx-auto md:w-4/5">
      <div className="container mx-auto">
      <h2 className="md:text-5xl text-3xl font-bold mb-4">Choose your <span className="text-primary dark:text-primary">Plan</span></h2>
      <p className="font-light md:max-w-2xl mb-12">
      Choose the perfect plan to unlock the full potential of Frontend AI. Start building stunning, responsive UIs today!
      </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl border ${
                plan.highlight
                  ? "border scale-105"
                  : "border"
              } transition-transform hover:scale-105 cursor-pointer duration-300`}
            >
              <h3 className="text-xl font-semibold mb-4 uppercase">
                {plan.title}
              </h3>
              <p className="md:text-4xl text-3xl font-bold text-teal-900 mb-4">
                {plan.price}
              </p>
              <p className="text-sm font-light text-opacity-50 mb-6">
                {plan.description}
              </p>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center space-x-3 text-opacity-50 font-light"
                  >
                    <span className="w-3 h-3 bg-teal-900 rounded-full flex-shrink-0"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="">
                <button
                  className={`px-6 py-3 rounded-lg font-medium ${
                    plan.highlight
                      ? "border-primary border"
                      : "border"
                  } transition-colors duration-200`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;