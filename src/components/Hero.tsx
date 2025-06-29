import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Target, Wand2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToGallery = () => {
    const gallerySection = document.getElementById('templates');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden hero-bg min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern"></div>
      
      {/* Floating Elements */}
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500/20 to-yellow-400/20 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-400/30 mb-8">
              <Wand2 className="h-5 w-5 text-amber-400" />
              <span className="text-sm font-medium text-amber-200">AI-Powered Dream Weaving</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="hero-gradient-text block mb-4">
                Your Dreams,
              </span>
              <span className="elegant-text block mb-4">Our</span>
              <span className="magic-text">
                Digital Magic
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
              Transform your wildest imagination into breathtaking <span className="text-amber-400 font-semibold">8K visuals</span> and 
              <span className="text-amber-400 font-semibold"> cinematic masterpieces</span>. 
              Where creativity meets cutting-edge AI technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <button className="group bg-gradient-to-r from-amber-500 to-yellow-400 text-black px-10 py-5 rounded-2xl font-bold text-lg hover:from-amber-400 hover:to-yellow-300 hover:scale-105 transition-all duration-300 shadow-2xl shadow-amber-500/25">
              <span className="relative z-10">Start Creating Magic</span>
            </button>
            <button 
              onClick={scrollToGallery}
              className="bg-transparent text-white px-10 py-5 rounded-2xl font-bold text-lg border-2 border-amber-400/50 hover:border-amber-400 hover:bg-amber-400/10 transition-all duration-300"
            >
              Explore Gallery
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-amber-400/30 transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-br from-amber-400 to-yellow-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-8 w-8 text-black" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-white">Lightning Fast</h3>
              <p className="text-gray-300 leading-relaxed">Transform simple thoughts into professional-grade prompts in mere seconds</p>
            </div>
            
            <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-amber-400/30 transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-br from-amber-400 to-yellow-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Target className="h-8 w-8 text-black" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-white">AI Precision</h3>
              <p className="text-gray-300 leading-relaxed">Optimized for Veo3, Sora, GPT-4o, and Midjourney's latest models</p>
            </div>
            
            <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-amber-400/30 transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-br from-amber-400 to-yellow-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="h-8 w-8 text-black" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-white">Studio Quality</h3>
              <p className="text-gray-300 leading-relaxed">Generate cinema-grade videos and ultra-sharp 8K images</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};