'use client';

import Image from 'next/image';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/jonathan-kemper-KbI5cMohRlo-unsplash.jpg"
          alt="Flood warning scene with submerged signs and city skyline"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Catchment-Aware Flood Forecasting System
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
          Advanced machine learning system for real-time flood prediction and early warning 
          using catchment-specific models and meteorological data
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('project-scope')}
            className="px-8 py-3 bg-white text-[#54416d] rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Learn More
          </button>
          <button
            onClick={() => scrollToSection('downloads')}
            className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-[#54416d] transition-colors"
          >
            View Research
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
