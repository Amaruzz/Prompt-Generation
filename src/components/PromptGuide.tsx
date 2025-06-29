import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight,
  Lightbulb,
  Palette,
  Camera,
  Sparkles,
  Target,
  Wand2
} from 'lucide-react';

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  before: string;
  after: string;
  tip: string;
  duration: number;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Start with Your Core Idea",
    description: "Begin with a simple, clear description of what you want to create",
    icon: <Lightbulb className="h-8 w-8" />,
    before: "a woman",
    after: "a professional businesswoman in her 30s",
    tip: "Be specific about the main subject - age, profession, or key characteristics",
    duration: 3000
  },
  {
    id: 2,
    title: "Define the Style & Mood",
    description: "Specify the artistic style, mood, and overall aesthetic you're aiming for",
    icon: <Palette className="h-8 w-8" />,
    before: "a professional businesswoman in her 30s",
    after: "a professional businesswoman in her 30s, confident expression, modern corporate style",
    tip: "Add emotional context and artistic direction",
    duration: 3000
  },
  {
    id: 3,
    title: "Set the Scene & Environment",
    description: "Describe the setting, background, and environmental context",
    icon: <Camera className="h-8 w-8" />,
    before: "a professional businesswoman in her 30s, confident expression, modern corporate style",
    after: "a professional businesswoman in her 30s, confident expression, modern corporate style, in a sleek office environment",
    tip: "Think about location, time of day, and atmosphere",
    duration: 3000
  },
  {
    id: 4,
    title: "Add Technical Specifications",
    description: "Include quality, resolution, and technical parameters for best results",
    icon: <Target className="h-8 w-8" />,
    before: "a professional businesswoman in her 30s, confident expression, modern corporate style, in a sleek office environment",
    after: "a professional businesswoman in her 30s, confident expression, modern corporate style, in a sleek office environment, 8K resolution, professional photography",
    tip: "Always include quality markers like '8K', 'professional', 'high-resolution'",
    duration: 3000
  },
  {
    id: 5,
    title: "Enhance with Lighting & Details",
    description: "Specify lighting conditions and fine details to elevate the quality",
    icon: <Sparkles className="h-8 w-8" />,
    before: "a professional businesswoman in her 30s, confident expression, modern corporate style, in a sleek office environment, 8K resolution, professional photography",
    after: "a professional businesswoman in her 30s, confident expression, modern corporate style, in a sleek office environment, 8K resolution, professional photography, studio lighting, sharp focus",
    tip: "Lighting is crucial - specify 'studio lighting', 'natural light', or 'dramatic lighting'",
    duration: 3000
  },
  {
    id: 6,
    title: "Final Polish & Optimization",
    description: "Add finishing touches and AI model-specific optimizations",
    icon: <Wand2 className="h-8 w-8" />,
    before: "a professional businesswoman in her 30s, confident expression, modern corporate style, in a sleek office environment, 8K resolution, professional photography, studio lighting, sharp focus",
    after: "a professional businesswoman in her 30s, confident expression, modern corporate style, in a sleek office environment, 8K resolution, professional photography, studio lighting, sharp focus, detailed textures, award-winning composition",
    tip: "Add final quality enhancers specific to your chosen AI model",
    duration: 3000
  }
];

export const PromptGuide: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + (100 / (steps[currentStep].duration / 100));
          
          if (newProgress >= 100) {
            if (currentStep < steps.length - 1) {
              setCurrentStep(currentStep + 1);
              return 0;
            } else {
              setIsPlaying(false);
              return 100;
            }
          }
          
          return newProgress;
        });
      }, 100);
    }

    return () => clearInterval(interval);
  }, [isPlaying, currentStep]);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    setProgress(0);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setProgress(0);
      setIsPlaying(false);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setProgress(0);
      setIsPlaying(false);
    }
  };

  const currentStepData = steps[currentStep];

  return (
    <section id="guide" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 gradient-text">
            Master the Art of Prompt Crafting
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Follow our step-by-step video guide to transform simple ideas into professional AI prompts
          </p>
        </motion.div>

        {/* Video-Style Player */}
        <div className="bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          {/* Video Header */}
          <div className="bg-gradient-to-r from-gray-900 to-black p-4 border-b border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-gray-400 text-sm font-mono">
                Step {currentStep + 1} of {steps.length}
              </div>
            </div>
          </div>

          {/* Video Content */}
          <div className="aspect-video bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-8 grid-rows-6 h-full">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div key={i} className="border border-white/20"></div>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center p-8">
              {/* Step Icon */}
              <motion.div
                key={currentStep}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-amber-400 to-yellow-500 w-20 h-20 rounded-3xl flex items-center justify-center mb-6 shadow-2xl"
              >
                {currentStepData.icon}
              </motion.div>

              {/* Step Title */}
              <motion.h3
                key={`title-${currentStep}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold text-white mb-4 text-center"
              >
                {currentStepData.title}
              </motion.h3>

              {/* Step Description */}
              <motion.p
                key={`desc-${currentStep}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-gray-300 text-center mb-8 max-w-2xl"
              >
                {currentStepData.description}
              </motion.p>

              {/* Before/After Examples */}
              <motion.div
                key={`examples-${currentStep}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="w-full max-w-3xl space-y-4"
              >
                {/* Before */}
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-red-400 font-semibold text-sm">BEFORE</span>
                  </div>
                  <p className="text-gray-300 font-mono text-sm">"{currentStepData.before}"</p>
                </div>

                {/* After */}
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-green-400 font-semibold text-sm">AFTER</span>
                  </div>
                  <p className="text-gray-300 font-mono text-sm">"{currentStepData.after}"</p>
                </div>

                {/* Pro Tip */}
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Sparkles className="h-4 w-4 text-amber-400" />
                    <span className="text-amber-400 font-semibold text-sm">PRO TIP</span>
                  </div>
                  <p className="text-gray-300 text-sm">{currentStepData.tip}</p>
                </div>
              </motion.div>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
              <motion.div
                className="h-full bg-gradient-to-r from-amber-400 to-yellow-500"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>

          {/* Video Controls */}
          <div className="bg-black p-6 border-t border-white/10">
            <div className="flex items-center justify-between">
              {/* Left Controls */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={handlePlay}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-black hover:from-amber-400 hover:to-yellow-300 transition-all shadow-lg flex items-center justify-center"
                >
                  {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
                </button>
                
                <button
                  onClick={handleReset}
                  className="w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center justify-center"
                >
                  <RotateCcw className="h-5 w-5" />
                </button>

                <div className="text-white text-sm">
                  {Math.round(progress)}% • Step {currentStep + 1}/{steps.length}
                </div>
              </div>

              {/* Right Controls */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                
                <button
                  onClick={nextStep}
                  disabled={currentStep === steps.length - 1}
                  className="w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};