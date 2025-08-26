import React from 'react';
import { Dna, Microscope, Leaf, Shield } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Antimicrobial Resistance",
      description: "Apply AlphaFold to understand and combat drug-resistant pathogens."
    },
    {
      icon: Microscope,
      title: "Human & Animal Health",
      description: "Explore protein structures to advance medical and veterinary research."
    },
    {
      icon: Leaf,
      title: "Agriculture & Environment",
      description: "Investigate crop science, food security, and environmental health applications."
    },
    {
      icon: Dna,
      title: "Synthetic Biology",
      description: "Design novel proteins and biological systems for innovative solutions."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-50/30 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white/60 backdrop-blur-md border border-red-200/50 rounded-full text-red-600 text-sm font-medium mb-6 shadow-lg animate-fade-in">
            About the Contest
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-black mb-6 animate-fade-in-up delay-200">
            AlphaFold Research Challenge
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light animate-fade-in-up delay-300">
            4-day team competition applying AlphaFold to real-world research challenges.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left delay-500">
            <div>
              <h3 className="text-xl font-medium text-black mb-4">Contest Structure</h3>
              <p className="text-gray-600 font-light mb-4">
                6 teams of 4 participants each. International participants from Kenya, Rwanda, and Tanzania 
                join local researchers with access to AlphaFold tools and HPC resources.
              </p>
              <p className="text-gray-600 font-light mb-4">
                Facilitators provide technical support throughout the event.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-md border border-red-200/50 p-6 rounded-2xl shadow-lg">
              <h4 className="font-medium text-red-800 mb-2">Expected Outcomes</h4>
              <p className="text-red-700 text-sm font-light">
                Hands-on AlphaFold experience with research reports and presentations.
              </p>
            </div>
          </div>

          {/* Right Content - Placeholder for Banner Image */}
          <div className="relative animate-slide-in-right delay-700">
  <div className="bg-white/40 backdrop-blur-md rounded-3xl p-2 h-80 flex items-center justify-center border border-red-200/50 shadow-xl overflow-hidden group cursor-pointer">
    <img 
      src="/images/bg03.jpg" 
      alt="Protein Structure Illustration" 
      className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
    />
  </div>
  {/* Decorative Elements */}
  <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-600/30 backdrop-blur-sm rounded-full border border-red-300/50"></div>
  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-black/20 backdrop-blur-sm rounded-full border border-gray-300/50"></div>
</div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in-up delay-1000">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:bg-white/80 hover:-translate-y-2"
            >
              <div className="bg-red-100/70 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors duration-300 border border-red-200/50">
                <feature.icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="font-medium text-black mb-3">{feature.title}</h4>
              <p className="text-gray-600 text-sm font-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;