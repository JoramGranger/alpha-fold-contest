import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Schedule', href: '#timeline' },
    { name: 'Registration', href: '#registration' },
    { name: 'Partners', href: '#partners' },
  ];

  const resources = [
    { name: 'Contest Guidelines', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'AlphaFold Resources', href: '#' },
    { name: 'Travel & Accommodation', href: '#' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
  ];

  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-transparent"></div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-2xl font-light text-white mb-2 animate-fade-in">AlphaFold Contest</h3>
              <p className="text-red-400 font-light">Uganda 2025</p>
            </div>
            <p className="text-gray-400 font-light animate-fade-in-up delay-200">
              4-day research challenge applying AlphaFold to real-world problems.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 animate-fade-in-up delay-300">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                <a href="mailto:alphafold@aceuganda.org" className="text-gray-300 hover:text-white transition-colors">
                  alphafold@aceuganda.org
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <a href="tel:+256-xxx-xxx-xxx" className="text-gray-300 hover:text-white transition-colors">
                  +256 XXX XXX XXX
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  ACE Uganda, Infectious Diseases Institute<br />
                  Makerere University, Kampala
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-light text-white mb-6 animate-fade-in delay-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-light text-white mb-6 animate-fade-in delay-500">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href={resource.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-light text-white mb-6 animate-fade-in delay-600">Stay Connected</h4>
            
            {/* Newsletter Signup */}
            <div className="mb-8">
              <p className="text-gray-400 mb-4 font-light">
                Stay updated on contest details.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 flex-1 focus:outline-none focus:border-red-500"
                />
                <button className="bg-red-600/90 backdrop-blur-md hover:bg-red-600 text-white font-light py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 border border-red-500/30">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-400 mb-4 font-light">Follow us:</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-white/10 backdrop-blur-md hover:bg-red-600/90 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group border border-white/20 hover:border-red-500/30"
                    title={social.name}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 AlphaFold Contest Uganda. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;