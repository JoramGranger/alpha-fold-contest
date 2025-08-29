import React from 'react';
import { ExternalLink, Users, FileText, CheckCircle } from 'lucide-react';

const Registration: React.FC = () => {
  const requirements = [
    "Researchers, students, or professionals in relevant fields",
    "Interest in protein structure prediction and applications",
    "Teams of 4 participants (individuals will be matched)",
    "4-day availability from October 13-17, 2025",
  ];

  const steps = [
    {
      icon: FileText,
      title: "Submit Application",
      description: "Complete registration with your research interests"
    },
    {
      icon: Users,
      title: "Team Formation",
      description: "Join a team or be matched with other participants"
    },
    {
      icon: CheckCircle,
      title: "Confirmation",
      description: "Receive acceptance and event details"
    }
  ];

  return (
    <section id="registration" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-l from-red-50/30 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white/60 backdrop-blur-md border border-red-200/50 rounded-full text-red-600 text-sm font-medium mb-6 shadow-lg animate-fade-in">
            Registration
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-black mb-6 animate-fade-in-up delay-200">
            Join the Challenge
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light animate-fade-in-up delay-300">
            4-day AlphaFold research challenge at Makerere University.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Requirements & Steps */}
            <div className="space-y-12 animate-slide-in-left delay-500">
              {/* Requirements */}
              <div>
                <h3 className="text-2xl font-light text-black mb-6">Who Can Participate?</h3>
                <div className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-light">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Registration Steps */}
             {/*  <div>
                <h3 className="text-2xl font-light text-black mb-6">How to Register</h3>
                <div className="space-y-6">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-black mb-2">{step.title}</h4>
                        <p className="text-gray-600 font-light">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>

            {/* Right Side - Registration Card */}
            <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/50 animate-slide-in-right delay-700">
              <div className="text-center mb-8">
                <div className="bg-red-600/90 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-red-500/30 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-light text-black mb-4">Contest Registration</h3>
                <p className="text-gray-600 mb-6 font-light">
                  Secure your spot in this research challenge.
                </p>
              </div>

              {/* Registration Status */}
              <div className="bg-green-50/70 backdrop-blur-sm border border-green-200/50 rounded-2xl p-6 mb-8 shadow-lg animate-pulse">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-800 font-light">Registration Now Open</span>
                </div>
                <p className="text-green-700 text-sm mt-2 font-light">
                  Apply early to secure your place.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSekxMwRzRrVF63ixrmovPY5f-wa0A7MUj9U6boDbZ_3Ma3FoQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-red-600/90 backdrop-blur-md hover:bg-red-600 text-white font-medium py-4 px-6 rounded-full transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center space-x-2 border border-red-500/30 shadow-lg"
                >
                  <span>Register Now</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              {/* <div className="mt-6 text-center">
                <p className="text-gray-500 text-sm font-light">
                  Questions? Contact us at{' '}
                  <a href="mailto:alphafold@aceuganda.org" className="text-red-600 hover:underline">
                    alphafold@aceuganda.org
                  </a>
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;