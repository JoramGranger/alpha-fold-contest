import React from 'react';
import { Calendar, Users, Trophy, Award } from 'lucide-react';

const Timeline: React.FC = () => {
  const timelineEvents = [
    {
      date: "Registration Open",
      title: "Registration",
      description: "Applications open until 12th September.",
      icon: Users,
      status: "active"
    },
    {
      date: "October 13, 2025",
      title: "Day 1: Pre Hackathon Day",
      description: "Welcome and reception, Orientation session",
      icon: Calendar,
      status: "upcoming"
    },
    {
      date: "October 14, 2025",
      title: "Day 1: Opening",
      description: "Opening ceremony, keynote, challenge announcement.",
      icon: Calendar,
      status: "upcoming"
    },
    {
      date: "October 15-16, 2025",
      title: "Days 2-3: Research",
      description: "Team work with AlphaFold and HPC resources.",
      icon: Users,
      status: "upcoming"
    },
    {
      date: "October 17, 2025",
      title: "Day 4: Presentations",
      description: "Team presentations, judging, awards ceremony.",
      icon: Award,
      status: "upcoming"
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Image with subtle animation */}
      <div className="absolute inset-0 bg-[url('/images/bg-rgb04.webp')] bg-cover bg-center opacity-30 animate-pulse"></div>
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-transparent animate-pulse"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500/20 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-red-400/30 rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-white/20 rounded-full animate-ping delay-2000"></div>
      </div>
      
      {/* Moving Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-red-900/5 to-transparent animate-pulse delay-700"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium mb-6 shadow-lg animate-fade-in">
            4-Day Schedule
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6 animate-fade-in-up delay-200">
            Contest Timeline
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light animate-fade-in-up delay-300">
            Four days of collaboration and discovery at ACE Uganda.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-red-600"></div>

            {/* Timeline Items */}
            <div className="space-y-12 animate-fade-in-up delay-500">
              {timelineEvents.map((event, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-black z-10"></div>

                  {/* Content Card */}
                  <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:border-red-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-xl">
                      <div className="flex items-center mb-4">
                        <div className="bg-red-600/90 backdrop-blur-sm w-10 h-10 rounded-xl flex items-center justify-center mr-4 border border-red-500/30">
                          <event.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-red-300 text-sm font-medium">{event.date}</div>
                      </div>
                      <h3 className="text-xl font-medium text-white mb-3">{event.title}</h3>
                      <p className="text-gray-300 font-light">{event.description}</p>
                      
                      <div className="mt-4">
                        <span className={`inline-flex items-center px-3 py-1 backdrop-blur-sm text-xs font-medium rounded-full border ${
                          event.status === 'active' 
                            ? 'bg-green-600/20 text-green-300 border-green-500/30 animate-pulse' 
                            : 'bg-red-600/20 text-red-300 border-red-500/30'
                        }`}>
                          {event.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-scale-in delay-1000">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto shadow-xl">
            <h3 className="text-2xl font-light text-white mb-4">Ready to Participate?</h3>
            <p className="text-gray-300 mb-6 font-light">
              Join researchers from across East Africa.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSekxMwRzRrVF63ixrmovPY5f-wa0A7MUj9U6boDbZ_3Ma3FoQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600/90 backdrop-blur-md hover:bg-red-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 border border-red-500/30 shadow-lg inline-block"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;