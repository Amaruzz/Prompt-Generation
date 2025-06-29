import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wand2, Copy, Download, Sparkles, Image, Video, Zap } from 'lucide-react';
import { useStore } from '../store/useStore';
import { GeneratedPrompt } from '../types';
import toast from 'react-hot-toast';

export const PromptGenerator: React.FC = () => {
  const { currentCategory, setCurrentCategory, addGeneratedPrompt, user, setLoading, isLoading } = useStore();
  const [input, setInput] = useState('');
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [selectedModel, setSelectedModel] = useState('GPT-4o');

  const imageModels = ['GPT-4o', 'Midjourney', 'DALL-E 3', 'Stable Diffusion'];
  const videoModels = ['Veo3', 'Sora', 'Runway ML', 'Pika Labs'];

  const enhancePrompt = async () => {
    if (!input.trim()) {
      toast.error('Please enter your dream first');
      return;
    }

    if (user && user.promptsGenerated >= user.monthlyLimit) {
      toast.error('Monthly limit reached. Upgrade to continue creating!');
      return;
    }

    setLoading(true);

    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    let enhanced = '';
    
    if (currentCategory === 'image') {
      enhanced = generateImagePrompt(input, selectedModel);
    } else {
      enhanced = generateVideoPrompt(input, selectedModel);
    }

    setGeneratedPrompt(enhanced);
    
    const newPrompt: GeneratedPrompt = {
      id: Date.now().toString(),
      originalInput: input,
      enhancedPrompt: enhanced,
      category: currentCategory,
      aiModel: selectedModel,
      timestamp: new Date(),
      quality: user?.plan === 'free' ? 'standard' : user?.plan === 'pro' ? 'premium' : 'ultra',
    };

    addGeneratedPrompt(newPrompt);
    setLoading(false);
    toast.success('✨ Your dream has been transformed!');
  };

  const generateImagePrompt = (input: string, model: string): string => {
    const baseEnhancements = {
      'GPT-4o': 'ultra-high resolution, 8K, photorealistic, professional photography, perfect lighting, sharp focus, detailed textures',
      'Midjourney': 'artistic masterpiece, ultra-detailed, cinematic lighting, award-winning photography, hyperrealistic, stunning composition',
      'DALL-E 3': 'high-quality digital art, professional rendering, perfect composition, vibrant colors, exceptional detail',
      'Stable Diffusion': 'masterpiece, best quality, ultra-detailed, photorealistic, professional photography, perfect lighting'
    };

    const enhancement = baseEnhancements[model as keyof typeof baseEnhancements];
    return `${input}, ${enhancement}, trending on artstation, professional color grading, soft shadows, no contrast, clean sharp focus, film photography`;
  };

  const generateVideoPrompt = (input: string, model: string): string => {
    const baseEnhancements = {
      'Veo3': 'cinematic quality, 4K resolution, smooth camera movement, professional cinematography, perfect lighting, 30 seconds duration',
      'Sora': 'high-quality video, realistic motion, cinematic composition, professional lighting, smooth transitions, detailed textures',
      'Runway ML': 'professional video production, smooth motion, high resolution, cinematic style, perfect timing',
      'Pika Labs': 'high-quality animation, smooth transitions, professional rendering, cinematic lighting'
    };

    const enhancement = baseEnhancements[model as keyof typeof baseEnhancements];
    return `${input}, ${enhancement}, no camera shake, consistent lighting, professional color grading, smooth motion blur`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPrompt);
    toast.success('✨ Copied to clipboard!');
  };

  return (
    <section id="generator" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-6 gradient-text">
            Dream Weaver Studio
          </h2>
          <p className="text-xl text-gray-300">Where imagination meets AI precision</p>
        </motion.div>

        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
          {/* Category Selection */}
          <div className="flex justify-center mb-8">
            <div className="bg-black/60 rounded-2xl p-2 shadow-lg border border-white/20">
              <button
                onClick={() => setCurrentCategory('image')}
                className={`flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold transition-all ${
                  currentCategory === 'image'
                    ? 'bg-white text-black shadow-lg'
                    : 'text-white hover:text-gray-300 hover:bg-white/10'
                }`}
              >
                <Image className="h-5 w-5" />
                <span>Images</span>
              </button>
              <button
                onClick={() => setCurrentCategory('video')}
                className={`flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold transition-all ${
                  currentCategory === 'video'
                    ? 'bg-white text-black shadow-lg'
                    : 'text-white hover:text-gray-300 hover:bg-white/10'
                }`}
              >
                <Video className="h-5 w-5" />
                <span>Videos</span>
              </button>
            </div>
          </div>

          {/* AI Model Selection */}
          <div className="mb-8">
            <label className="block text-lg font-semibold text-white mb-4">
              Choose Your AI Companion
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {(currentCategory === 'image' ? imageModels : videoModels).map((model) => (
                <button
                  key={model}
                  onClick={() => setSelectedModel(model)}
                  className={`p-4 rounded-2xl border-2 transition-all font-semibold ${
                    selectedModel === model
                      ? 'border-white bg-white/10 text-white shadow-lg'
                      : 'border-white/30 hover:border-white/60 text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="text-sm">{model}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="mb-8">
            <label className="block text-lg font-semibold text-white mb-4">
              Describe Your Vision
            </label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Paint your ${currentCategory} dream with words...`}
              className="w-full h-40 p-6 bg-black/60 border-2 border-white/30 rounded-2xl focus:ring-2 focus:ring-white focus:border-white resize-none text-white placeholder-gray-400 text-lg"
            />
          </div>

          {/* Generate Button */}
          <div className="text-center mb-8">
            <button
              onClick={enhancePrompt}
              disabled={isLoading}
              className="group bg-white text-black px-12 py-6 rounded-2xl font-bold text-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-3 mx-auto shadow-2xl"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black"></div>
                  <span>Weaving Magic...</span>
                </>
              ) : (
                <>
                  <Wand2 className="h-6 w-6" />
                  <span>Transform My Dream</span>
                </>
              )}
            </button>
          </div>

          {/* Generated Prompt */}
          {generatedPrompt && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-black/60 rounded-2xl p-8 border border-white/20 shadow-xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-2xl flex items-center space-x-3 text-white">
                  <Sparkles className="h-6 w-6" />
                  <span>Your Masterpiece Prompt</span>
                </h3>
                <div className="flex space-x-3">
                  <button
                    onClick={copyToClipboard}
                    className="p-3 text-white hover:text-gray-300 hover:bg-white/10 rounded-xl transition-colors border border-white/30"
                  >
                    <Copy className="h-5 w-5" />
                  </button>
                  <button className="p-3 text-white hover:text-gray-300 hover:bg-white/10 rounded-xl transition-colors border border-white/30">
                    <Download className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <p className="text-gray-200 leading-relaxed text-lg">{generatedPrompt}</p>
              </div>
              <div className="mt-6 flex items-center justify-between text-sm text-gray-400">
                <span className="text-white font-semibold">Optimized for {selectedModel}</span>
                <span className="flex items-center space-x-2 text-white">
                  <Zap className="h-4 w-4" />
                  <span>Premium Quality</span>
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};