import React from 'react';
import { Building, Users, Award } from 'lucide-react';

const Partners: React.FC = () => {
  const partners = [
    {
      name: "ACE Uganda",
      type: "Host Institution",
      description: "African Center of Excellence in BioInformatics and Data Intensive Sciences",
      logo: Building,
      website: "#"
    },
    {
      name: "Infectious Diseases Institute",
      type: "Venue Partner",
      description: "Makerere University research institute hosting the event",
      logo: Award,
      website: "#"
    },
    {
      name: "Makerere University",
      type: "Academic Partner",
      description: "Uganda's premier university and research institution",
      logo: Users,
      website: "#"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
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
            Premier research institutions advancing computational biology in East Africa.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto animate-fade-in-up delay-500">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="group bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-white/50 hover:bg-white/80"
            >
              <div className="text-center">
                {/* Logo Placeholder */}
                <div className="bg-red-100/70 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-colors duration-300 border border-red-200/50">
                  <partner.logo className="w-10 h-10 text-red-600 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Partner Type Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-white/50 backdrop-blur-sm text-gray-600 text-xs font-medium rounded-full mb-4 border border-gray-200/50">
                  {partner.type}
                </div>

                {/* Partner Name */}
                <h3 className="text-lg font-medium text-black mb-3">{partner.name}</h3>

                {/* Description */}
                <p className="text-gray-600 text-sm font-light mb-6">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership CTA */}
        <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-8 md:p-12 border border-white/50 max-w-3xl mx-auto animate-scale-in delay-700">
          <div className="text-center">
            <h3 className="text-2xl font-light text-black mb-6">
              Venue Information
            </h3>
            <p className="text-gray-600 mb-8 font-light">
              Infectious Diseases Institute, Makerere University with state-of-the-art facilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600/90 backdrop-blur-md hover:bg-red-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border border-red-500/30 shadow-lg">
                View Location
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;