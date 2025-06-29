import React from 'react';
import { motion } from 'framer-motion';
import { User, Menu, X } from 'lucide-react';
import { useStore } from '../store/useStore';

interface HeaderProps {
  onMenuToggle: () => void;
  isMenuOpen: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onMenuToggle, isMenuOpen }) => {
  const { user } = useStore();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-black/95 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 flex items-center justify-center">
              <img 
                src="/swapnashilpam-removebg-preview.png" 
                alt="SwapnaSilpam Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">
                SwapnaSilpam
              </h1>
              <p className="text-sm text-gray-400">Dream • Create • Inspire</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              <a href="#guide" className="text-gray-300 hover:text-white transition-colors font-medium">
                Guide
              </a>
              <a href="#generator" className="text-gray-300 hover:text-white transition-colors font-medium">
                Generator
              </a>
              <a href="#templates" className="text-gray-300 hover:text-white transition-colors font-medium">
                Templates
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors font-medium">
                Pricing
              </a>
            </nav>
            
            {user && (
              <div className="flex items-center space-x-3">
                <div className="text-sm">
                  <span className="text-white font-semibold">{user.promptsGenerated}</span>
                  <span className="text-gray-400">/{user.monthlyLimit}</span>
                </div>
                <div className="bg-white/10 p-2 rounded-full border border-white/20">
                  <User className="h-4 w-4 text-white" />
                </div>
              </div>
            )}
          </div>

          <button
            onClick={onMenuToggle}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors text-white"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </motion.header>
  );
};