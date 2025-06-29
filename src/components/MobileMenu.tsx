import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User } from 'lucide-react';
import { useStore } from '../store/useStore';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { user } = useStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-40 md:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-80 bg-gradient-to-br from-black via-gray-900 to-black shadow-2xl z-50 md:hidden border-l border-white/10"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <img 
                      src="/swapnashilpam-removebg-preview.png" 
                      alt="SwapnaSilpam Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="font-bold text-xl gradient-text">SwapnaSilpam</span>
                    <p className="text-xs text-gray-400">Dream • Create • Inspire</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {user && (
                <div className="bg-white/10 rounded-2xl p-6 mb-8 border border-white/20">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-white/20 p-2 rounded-full border border-white/30">
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{user.email}</p>
                      <p className="text-sm text-gray-400 capitalize">{user.plan} Dreamer</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-300">
                    <span className="font-semibold text-white">{user.promptsGenerated}</span>
                    <span className="text-gray-400">/{user.monthlyLimit} dreams crafted</span>
                  </div>
                </div>
              )}

              <nav className="space-y-2">
                <a
                  href="#guide"
                  onClick={onClose}
                  className="block py-4 px-6 text-gray-300 hover:bg-white/10 hover:text-white rounded-xl transition-colors font-medium"
                >
                  Prompt Guide
                </a>
                <a
                  href="#generator"
                  onClick={onClose}
                  className="block py-4 px-6 text-gray-300 hover:bg-white/10 hover:text-white rounded-xl transition-colors font-medium"
                >
                  Dream Weaver
                </a>
                <a
                  href="#templates"
                  onClick={onClose}
                  className="block py-4 px-6 text-gray-300 hover:bg-white/10 hover:text-white rounded-xl transition-colors font-medium"
                >
                  Inspiration Gallery
                </a>
                <a
                  href="#pricing"
                  onClick={onClose}
                  className="block py-4 px-6 text-gray-300 hover:bg-white/10 hover:text-white rounded-xl transition-colors font-medium"
                >
                  Pricing
                </a>
              </nav>

              <div className="mt-8 pt-6 border-t border-white/10">
                <button className="w-full bg-gradient-to-r from-amber-500 to-yellow-400 text-black py-4 px-6 rounded-2xl font-bold hover:from-amber-400 hover:to-yellow-300 transition-all">
                  Upgrade Your Magic
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};