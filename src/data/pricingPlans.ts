import { PricingPlan } from '../types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    interval: 'month',
    promptLimit: 50,
    features: [
      '50 prompts per month',
      'Basic prompt enhancement',
      'Image & video prompts',
      'Standard quality output',
      'Community support',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 19,
    interval: 'month',
    promptLimit: 500,
    popular: true,
    features: [
      '500 prompts per month',
      'Advanced AI enhancement',
      'Premium templates',
      'Ultra-quality output',
      'Priority support',
      'Prompt history & favorites',
      'API access',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 99,
    interval: 'month',
    promptLimit: -1, // Unlimited
    features: [
      'Unlimited prompts',
      'Custom AI models',
      'White-label solution',
      'Advanced analytics',
      'Dedicated support',
      'Custom integrations',
      'Team collaboration',
    ],
  },
];