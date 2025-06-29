export interface PromptTemplate {
  id: string;
  name: string;
  category: 'image' | 'video';
  description: string;
  template: string;
  tags: string[];
  aiModel: string;
  featured?: boolean;
}

export interface GeneratedPrompt {
  id: string;
  originalInput: string;
  enhancedPrompt: string;
  category: 'image' | 'video';
  aiModel: string;
  timestamp: Date;
  quality: 'standard' | 'premium' | 'ultra';
}

export interface User {
  id: string;
  email: string;
  plan: 'free' | 'pro' | 'enterprise';
  promptsGenerated: number;
  monthlyLimit: number;
  joinedAt: Date;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  interval: 'month' | 'year';
  features: string[];
  promptLimit: number;
  popular?: boolean;
}