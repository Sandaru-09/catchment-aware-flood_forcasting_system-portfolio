'use client';

import { FaEnvelope, FaBuilding, FaMapMarkerAlt, FaTwitter, FaLinkedin, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#54416d] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FloodForecast</h3>
            <p className="text-gray-300 mb-4">
              Advanced catchment-aware flood forecasting system using machine learning 
              and real-time data processing for improved disaster preparedness.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Follow us on Twitter"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Connect with us on LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Follow us on Pinterest"
              >
                <FaPinterest className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#project-scope" className="text-gray-300 hover:text-white transition-colors">Project Scope</a></li>
              <li><a href="#objectives" className="text-gray-300 hover:text-white transition-colors">Research Objectives</a></li>
              <li><a href="#methodology" className="text-gray-300 hover:text-white transition-colors">Methodology</a></li>
              <li><a href="#technologies" className="text-gray-300 hover:text-white transition-colors">Technologies</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-white transition-colors">Team</a></li>
              <li><a href="#downloads" className="text-gray-300 hover:text-white transition-colors">Downloads</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-[#75b4e3] flex-shrink-0" />
                <p>resQcall@gmail.com</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaBuilding className="text-[#75b4e3] flex-shrink-0" />
                <p>Department of Information Technology</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-[#75b4e3] flex-shrink-0" />
                <p>Faculty of Computing, SLIIT</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Catchment-Aware Flood Forecasting System. All rights reserved. | 
            Built with Next.js, React, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
