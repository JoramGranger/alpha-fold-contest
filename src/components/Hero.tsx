import React from 'react';
import { ArrowRight, Calendar, Trophy } from 'lucide-react';

interface HeroProps {
  onRegisterClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onRegisterClick }) => {
  return (
/*     <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center overflow-hidden"> */
/*     <section className="relative min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 flex items-center justify-center overflow-hidden"> */
<section className="relative min-h-screen bg-gradient-to-br from-stone-100 via-stone-200 to-stone-100 flex items-center justify-center overflow-hidden">
{/*       <section className="relative min-h-screen bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100 flex items-center justify-center overflow-hidden"> */}
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/images/bg--02.jpg')] bg-cover bg-center opacity-50"></div>
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium mb-8 shadow-lg animate-fade-in">
            <Trophy className="w-4 h-4 mr-2" />
            October 14-17, 2025 • ACE Uganda, Makerere University
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-thin text-white mb-6 leading-tight animate-fade-in-up delay-200">
            <span className="block text-red-500">AlphaFold Contest</span>
            <span className="block text-white">Uganda</span>
            <span className="block text-4xl md:text-6xl text-gray-300 font-extralight">2025</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 font-light animate-fade-in-up delay-300 max-w-2xl mx-auto">
            Protein structure prediction for health, agriculture, and biotechnology
          </p>

          {/* East African Flags */}
          <div className="flex justify-center items-center space-x-4 mb-12 animate-fade-in-up delay-400">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <span className="text-2xl">🇺🇬</span>
              <span className="text-2xl">🇰🇪</span>
              <span className="text-2xl">🇹🇿</span>
              <span className="text-2xl">🇷🇼</span>
              <span className="text-white text-sm font-light">East Africa</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up delay-500">
            <button
              onClick={onRegisterClick}
              className="group bg-red-600/90 backdrop-blur-md hover:bg-red-600 text-white font-medium py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl border border-red-500/30"
            >
              Register Now
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-scale-in delay-700">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
              <div className="text-3xl font-light text-red-400 mb-2">24</div>
              <div className="text-gray-300 font-light">Participants</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
              <div className="text-3xl font-light text-red-400 mb-2">6</div>
              <div className="text-gray-300 font-light">Teams</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
              <div className="text-3xl font-light text-red-400 mb-2">4</div>
              <div className="text-gray-300 font-light">Days</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;