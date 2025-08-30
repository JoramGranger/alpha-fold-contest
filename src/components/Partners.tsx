import React from 'react';
import { Building, Users, Award, Globe } from 'lucide-react';

const Partners: React.FC = () => {
  const partners = [
    {
      name: "Makerere University | IDI",
      logoImage: "/images/IDI_Logo.png",
      website: "https://idi.mak.ac.ug/"
    },
    {
      name: "ACE Uganda",
      logoImage: "/images/aceLogo-updated_red.png",
      website: "https://ace.ac.ug/"
    },
    {
      name: "Google DeepMind",
      logoImage: "/images/Google_DeepMind_Lockup.png",
      website: "https://deepmind.google/science/alphafold/"
    }
  ];

  return (
    <section id="partners" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-50/20 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white/60 backdrop-blur-md border border-red-200/50 rounded-full text-red-600 text-sm font-medium mb-6 shadow-lg animate-fade-in">
            Event Partners
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-black mb-6 animate-fade-in-up delay-200">
            Leading Institutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light animate-fade-in-up delay-300">
            The AlphaFold Contest Uganda 2025 is organized by the 
            African Center of Excellence in Bioinformatics & Data-intensive Sciences(ACE-Uganda) under 
            the Infectious Diseases Institute (IDI), Makerere University, in collaboration with Google DeepMind.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto animate-fade-in-up delay-500">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/60 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-white/50 hover:bg-white/80 overflow-hidden cursor-pointer block"
            >
              {/* Logo Container - Upper 50% */}
              <div className="h-40 bg-white/70 backdrop-blur-sm flex items-center justify-center p-6 group-hover:bg-white transition-colors duration-300">
                <img 
                  src={partner.logoImage} 
                  alt={`${partner.name} logo`}
                  className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const container = target.parentElement;
                    if (container) {
                      container.innerHTML = `
                        <div class="w-16 h-16 text-red-600 flex items-center justify-center">
                          <svg fill="currentColor" viewBox="0 0 24 24" class="w-full h-full">
                            <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                          </svg>
                        </div>
                      `;
                    }
                  }}
                />
              </div>

              {/* Content - Lower 50% */}
              <div className="p-6 text-center">
                {/* Partner Name */}
                <h3 className="text-lg font-medium text-black group-hover:text-red-600 transition-colors duration-300">{partner.name}</h3>
                
                {/* Visit Website Indicator */}
                <div className="flex items-center justify-center mt-2 text-gray-500 group-hover:text-red-500 transition-colors duration-300">
                  <Globe size={16} className="mr-1" />
                  <span className="text-sm">Visit Website</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Venue Information CTA */}
        <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-8 md:p-12 border border-white/50 max-w-3xl mx-auto animate-scale-in delay-700">
          <div className="text-center">
            <h3 className="text-2xl font-light text-black mb-6">
              Venue Information
            </h3>
            <p className="text-gray-600 mb-8 font-light">
              Infectious Diseases Institute, Makerere University Campus - Kampala, Uganda<br/>
              State-of-the-art facilities with high-performance computing resources.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://maps.app.goo.gl/qCkoB2U97x1QpoZq7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600/90 backdrop-blur-md hover:bg-red-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border border-red-500/30 shadow-lg inline-block text-center"
              >
                View Location
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;