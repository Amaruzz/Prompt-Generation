import React from 'react';
import { Twitter, Github, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-20 h-20 flex items-center justify-center">
                <img 
                  src="/swapnashilpam-removebg-preview.png" 
                  alt="SwapnaSilpam Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-4xl font-bold gradient-text">SwapnaSilpam</h3>
                <p className="text-gray-400 text-sm">Dream • Create • Inspire</p>
              </div>
            </div>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              Where dreams transform into digital masterpieces. Experience the magic of AI-powered creativity 
              with stunning 8K visuals and cinematic videos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-3 rounded-xl hover:bg-white/20 transition-colors border border-white/20">
                <Twitter className="h-6 w-6 text-white" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-xl hover:bg-white/20 transition-colors border border-white/20">
                <Github className="h-6 w-6 text-white" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-xl hover:bg-white/20 transition-colors border border-white/20">
                <Mail className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white text-lg">Product</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Dream Weaver</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Access</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white text-lg">Support</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © 2024 SwapnaSilpam. All rights reserved.
          </p>
          <div className="flex space-x-6 text-gray-400 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};