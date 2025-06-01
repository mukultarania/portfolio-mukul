import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Mukul.dev</h3>
            <p className="text-gray-400 mt-2">Building digital experiences</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com" className="hover:text-blue-400 transition" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="hover:text-blue-400 transition" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@example.com" className="hover:text-blue-400 transition">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mukul.dev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;