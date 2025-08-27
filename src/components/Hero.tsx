import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, Trophy } from 'lucide-react';

interface HeroProps {
  onRegisterClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onRegisterClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSentence, setCurrentSentence] = useState(0);

  const backgroundImages = [
    '/images/bg-blue04.webp',
    '/images/bg--01.webp',
    '/images/bg-rgb02.webp'
  ];

  const sentences = [
    "Protein structure prediction for health, agriculture, and biotechnology",
    "Advancing medical research through AI-powered protein analysis",
    "Building solutions for antimicrobial resistance and food security"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 6000); // Increased to 6 seconds for smoother experience

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  useEffect(() => {
    const sentenceInterval = setInterval(() => {
      setCurrentSentence((prev) => (prev + 1) % sentences.length);
    }, 8000); // Change sentence every 8 seconds

    return () => clearInterval(sentenceInterval);
  }, [sentences.length]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-stone-100 via-stone-200 to-stone-100 flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-2000 ease-in-out transform ${
              index === currentSlide 
                ? 'opacity-50 scale-100' 
                : 'opacity-0 scale-105'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 rounded-full transition-all duration-500 ease-out hover:bg-white/80 ${
              index === currentSlide 
                ? 'bg-white w-8 shadow-lg' 
                : 'bg-white/40 w-4 hover:w-6'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Title - Mobile First */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-thin text-white mb-6 leading-tight animate-fade-in-up delay-200">
            <span className="block text-red-500">AlphaFold Contest</span>
            <span className="block text-white mb-2">Uganda</span>
            <span className="block text-3xl sm:text-4xl md:text-6xl text-gray-300 font-extralight">2025</span>
          </h1>

          {/* Tagline - Mobile First with Typing Animation */}
          <div className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 font-light animate-fade-in-up delay-300 max-w-3xl mx-auto px-4">
            <span 
              key={currentSentence}
              className="typing-animation-loop"
            >
              {sentences[currentSentence]}
            </span>
          </div>

          {/* East African Flags - Mobile First */}
          <div className="flex justify-center items-center mb-8 sm:mb-12 animate-fade-in-up delay-400">
            <div className="flex items-center space-x-1 sm:space-x-2 bg-white/10 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full border border-white/20">
              <span className="text-lg sm:text-2xl">🇺🇬</span>
              <span className="text-lg sm:text-2xl">🇰🇪</span>
              <span className="text-lg sm:text-2xl">🇹🇿</span>
              <span className="text-lg sm:text-2xl">🇷🇼</span>
              <span className="text-white text-xs sm:text-sm font-light ml-1 sm:ml-2">East Africa</span>
            </div>
          </div>

          {/* CTA Button - Mobile First */}
          <div className="flex justify-center mb-12 sm:mb-16 animate-fade-in-up delay-500 px-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSekxMwRzRrVF63ixrmovPY5f-wa0A7MUj9U6boDbZ_3Ma3FoQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-red-600/90 backdrop-blur-md hover:bg-red-600 text-white font-medium py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl border border-red-500/30 inline-block w-full sm:w-auto text-center"
            >
              Register Now
              <ArrowRight className="inline-block ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Badge - Mobile First */}
          <div className="flex justify-center animate-scale-in delay-700 px-4">
            <div className="inline-flex flex-col sm:flex-row items-center px-4 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full sm:rounded-full text-white text-sm sm:text-lg font-medium shadow-lg text-center">
              <div className="flex items-center mb-1 sm:mb-0">
                <Trophy className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                <span className="text-xs sm:text-base">October 14-17, 2025</span>
              </div>
              <span className="text-xs sm:text-base sm:ml-2">ACE Uganda, Makerere University</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;