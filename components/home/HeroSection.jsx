'use client';

import React from 'react';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

const HeroSection = () => {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  const goToDashboard = () => {
    if (isSignedIn) {
      router.push('/dashboard');
    } else {
      router.push('/sign-in');
    }
  };
  
  return (
    <div className="md:w-4/5 mx-auto">
      {/* Main Heading */}
      <h1 className="md:text-5xl text-3xl font-semibold leading-relaxed">
        Your Ultimate Frontend<span className="dark:text-primary text-primary"> AI Co-Pilot</span>
      </h1>

      {/* Subheading */}
      <p className="font-light lg:w-2/3 mt-3">
      Create beautiful UI by simply uploading design screenshots and we convert that into a website in minutes using Vision AI
      </p>

      {/* CTA Button */}
      <button onClick={goToDashboard} className="mt-6 px-4 py-3 border border-teal-900 rounded-xl font-medium transition duration-300">
        Start Generating with <span className='dark:text-primary text-primary'>AI</span>
      </button>

      <div className="h-96 w-full bg-gray-800 mt-12 rounded-xl flex items-center justify-center relative">
        <p className="text-white font-medium text-lg absolute">
          GPTRUSH PROMO
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
