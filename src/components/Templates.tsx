import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Image, Video, Star, Copy, Wand2, Play, Download, Eye } from 'lucide-react';
import { promptTemplates } from '../data/promptTemplates';
import { PromptTemplate } from '../types';
import toast from 'react-hot-toast';

// High-quality AI-generated showcase content
const showcaseContent = {
  images: [
    {
      id: 'gpt4o-portrait',
      url: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop',
      title: 'Cinematic Portrait',
      model: 'GPT-4o',
      description: 'Ultra-realistic 8K portrait with professional studio lighting',
      prompt: 'Professional portrait, cinematic lighting, 8K resolution, hyperrealistic, award-winning photography'
    },
    {
      id: 'gpt4o-landscape',
      url: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop',
      title: 'Mystical Landscape',
      model: 'GPT-4o',
      description: 'Breathtaking landscape with dramatic lighting and ultra-sharp details',
      prompt: 'Epic landscape, dramatic lighting, 8K HDR, professional photography, stunning composition'
    },
    {
      id: 'gpt4o-architecture',
      url: 'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop',
      title: 'Futuristic Architecture',
      model: 'GPT-4o',
      description: 'Modern architectural masterpiece with perfect geometric precision',
      prompt: 'Futuristic architecture, clean lines, 8K resolution, professional architectural photography'
    },
    {
      id: 'gpt4o-abstract',
      url: 'https://images.pexels.com/photos/1323712/pexels-photo-1323712.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop',
      title: 'Abstract Art',
      model: 'GPT-4o',
      description: 'Vibrant abstract composition with flowing colors and textures',
      prompt: 'Abstract art, vibrant colors, flowing composition, high resolution digital art'
    },
    {
      id: 'gpt4o-nature',
      url: 'https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop',
      title: 'Nature Close-up',
      model: 'GPT-4o',
      description: 'Macro photography with incredible detail and natural lighting',
      prompt: 'Macro photography, natural lighting, ultra-detailed, 8K resolution, professional nature photography'
    }
  ],
  videos: [
    {
      id: 'veo3-cinematic',
      thumbnail: 'https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop',
      title: 'Cinematic Sequence',
      model: 'Veo3',
      description: 'Professional cinematic sequence with smooth camera movements',
      prompt: 'Cinematic sequence, smooth camera movement, 4K resolution, professional cinematography',
      duration: '30s'
    },
    {
      id: 'veo3-nature',
      thumbnail: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop',
      title: 'Nature Timelapse',
      model: 'Veo3',
      description: 'Stunning nature timelapse with dynamic lighting changes',
      prompt: 'Nature timelapse, dynamic lighting, 4K resolution, smooth transitions',
      duration: '45s'
    },
    {
      id: 'veo3-urban',
      thumbnail: 'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop',
      title: 'Urban Motion',
      model: 'Veo3',
      description: 'Dynamic urban scenes with flowing traffic and city lights',
      prompt: 'Urban motion, city lights, dynamic movement, 4K cinematic quality',
      duration: '25s'
    },
    {
      id: 'veo3-abstract',
      thumbnail: 'https://images.pexels.com/photos/1323712/pexels-photo-1323712.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop',
      title: 'Abstract Motion',
      model: 'Veo3',
      description: 'Fluid abstract animations with mesmerizing color transitions',
      prompt: 'Abstract motion graphics, fluid animation, vibrant colors, smooth transitions',
      duration: '20s'
    },
    {
      id: 'veo3-product',
      thumbnail: 'https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop',
      title: 'Product Showcase',
      model: 'Veo3',
      description: 'Professional product demonstration with elegant camera work',
      prompt: 'Product showcase, elegant camera movement, professional lighting, 4K quality',
      duration: '15s'
    }
  ]
};

export const Templates: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'image' | 'video'>('all');
  const [selectedTemplate, setSelectedTemplate] = useState<PromptTemplate | null>(null);
  const [showShowcase, setShowShowcase] = useState(true);

  const filteredTemplates = promptTemplates.filter(template => 
    selectedCategory === 'all' || template.category === selectedCategory
  );

  const copyTemplate = (template: PromptTemplate) => {
    navigator.clipboard.writeText(template.template);
    toast.success('✨ Template copied to clipboard!');
  };

  const copyShowcasePrompt = (prompt: string) => {
    navigator.clipboard.writeText(prompt);
    toast.success('✨ Prompt copied to clipboard!');
  };

  const useTemplate = (template: PromptTemplate) => {
    // This would integrate with the prompt generator
    toast.success('✨ Template loaded in Dream Weaver!');
  };

  return (
    <section id="templates" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-6 gradient-text">
            Inspiration Gallery
          </h2>
          <p className="text-xl text-gray-300">Professional templates and AI-generated masterpieces</p>
        </motion.div>

        {/* Showcase Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-black/60 rounded-2xl p-2 shadow-lg border border-white/20">
            <button
              onClick={() => setShowShowcase(true)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                showShowcase
                  ? 'bg-white text-black shadow-lg'
                  : 'text-white hover:text-gray-300 hover:bg-white/10'
              }`}
            >
              AI Showcase
            </button>
            <button
              onClick={() => setShowShowcase(false)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                !showShowcase
                  ? 'bg-white text-black shadow-lg'
                  : 'text-white hover:text-gray-300 hover:bg-white/10'
              }`}
            >
              Templates
            </button>
          </div>
        </div>

        {showShowcase ? (
          <>
            {/* AI Showcase Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-16"
            >
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                8K Images Generated with GPT-4o
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {showcaseContent.images.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={item.url}
                        alt={item.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-white text-sm font-semibold">{item.model}</span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => copyShowcasePrompt(item.prompt)}
                            className="flex-1 bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-white/30 transition-colors flex items-center justify-center space-x-1"
                          >
                            <Copy className="h-4 w-4" />
                            <span>Copy</span>
                          </button>
                          <button className="flex-1 bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-white/30 transition-colors flex items-center justify-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>View</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="font-bold text-xl text-white mb-2">{item.title}</h4>
                      <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                      <div className="bg-black/60 rounded-lg p-3 border border-white/10">
                        <p className="text-gray-400 text-xs font-mono">{item.prompt}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                Cinematic Videos Created with Veo3
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {showcaseContent.videos.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-white text-sm font-semibold">{item.model}</span>
                      </div>
                      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-white text-sm font-semibold">{item.duration}</span>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                          <Play className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => copyShowcasePrompt(item.prompt)}
                            className="flex-1 bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-white/30 transition-colors flex items-center justify-center space-x-1"
                          >
                            <Copy className="h-4 w-4" />
                            <span>Copy</span>
                          </button>
                          <button className="flex-1 bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-white/30 transition-colors flex items-center justify-center space-x-1">
                            <Play className="h-4 w-4" />
                            <span>Play</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="font-bold text-xl text-white mb-2">{item.title}</h4>
                      <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                      <div className="bg-black/60 rounded-lg p-3 border border-white/10">
                        <p className="text-gray-400 text-xs font-mono">{item.prompt}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        ) : (
          <>
            {/* Category Filter */}
            <div className="flex justify-center mb-12">
              <div className="bg-black/60 rounded-2xl p-2 shadow-lg border border-white/20">
                {(['all', 'image', 'video'] as const).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold transition-all capitalize ${
                      selectedCategory === category
                        ? 'bg-white text-black shadow-lg'
                        : 'text-white hover:text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    {category === 'image' && <Image className="h-5 w-5" />}
                    {category === 'video' && <Video className="h-5 w-5" />}
                    <span>{category}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Templates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTemplates.map((template, index) => (
                <motion.div
                  key={template.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-2xl ${
                        template.category === 'image' 
                          ? 'bg-white text-black' 
                          : 'bg-gray-200 text-black'
                      }`}>
                        {template.category === 'image' ? 
                          <Image className="h-5 w-5" /> : 
                          <Video className="h-5 w-5" />
                        }
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-white">{template.name}</h3>
                        <p className="text-sm text-gray-400">{template.aiModel}</p>
                      </div>
                    </div>
                    {template.featured && (
                      <div className="bg-white/10 p-2 rounded-full border border-white/20">
                        <Star className="h-5 w-5 text-white fill-current" />
                      </div>
                    )}
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {template.description}
                  </p>

                  <div className="bg-black/60 rounded-xl p-4 mb-6 border border-white/10">
                    <p className="text-sm text-gray-300 font-mono leading-relaxed">
                      {template.template.length > 100 
                        ? `${template.template.substring(0, 100)}...` 
                        : template.template
                      }
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {template.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <button
                      onClick={() => copyTemplate(template)}
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 border-2 border-white/30 text-white rounded-xl hover:bg-white/10 hover:border-white transition-all font-semibold"
                    >
                      <Copy className="h-4 w-4" />
                      <span>Copy</span>
                    </button>
                    <button
                      onClick={() => useTemplate(template)}
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-white text-black rounded-xl hover:bg-gray-100 transition-all font-semibold"
                    >
                      <Wand2 className="h-4 w-4" />
                      <span>Use</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};