import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Crown, Building } from 'lucide-react';
import { pricingPlans } from '../data/pricingPlans';

export const Pricing: React.FC = () => {
  const getPlanIcon = (planId: string) => {
    switch (planId) {
      case 'free': return <Zap className="h-8 w-8" />;
      case 'pro': return <Crown className="h-8 w-8" />;
      case 'enterprise': return <Building className="h-8 w-8" />;
      default: return <Zap className="h-8 w-8" />;
    }
  };

  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 gradient-text">
            Choose Your Creative Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Unlock unlimited creativity with plans designed for every dreamer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white/5 backdrop-blur-sm rounded-3xl border-2 p-8 transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-white shadow-2xl shadow-white/20 scale-105' 
                  : 'border-white/20 hover:border-white/40'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="bg-white w-20 h-20 rounded-3xl flex items-center justify-center mb-6 mx-auto text-black">
                  {getPlanIcon(plan.id)}
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold gradient-text">${plan.price}</span>
                  <span className="text-gray-400 text-lg">/{plan.interval}</span>
                </div>
                <p className="text-white font-semibold text-lg">
                  {plan.promptLimit === -1 ? 'Unlimited' : plan.promptLimit} dreams per month
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <div className="bg-white/20 rounded-full p-1 mt-1 border border-white/30">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-300 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-white text-black hover:bg-gray-100 hover:scale-105 shadow-2xl'
                    : 'bg-transparent text-white border-2 border-white/30 hover:border-white hover:bg-white/10'
                }`}
              >
                {plan.price === 0 ? 'Start Dreaming Free' : 'Upgrade Your Magic'}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6 text-lg">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex justify-center space-x-8 text-white font-semibold">
            <span className="flex items-center space-x-2">
              <Check className="h-5 w-5" />
              <span>Cancel anytime</span>
            </span>
            <span className="flex items-center space-x-2">
              <Check className="h-5 w-5" />
              <span>24/7 support</span>
            </span>
            <span className="flex items-center space-x-2">
              <Check className="h-5 w-5" />
              <span>Money-back guarantee</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};