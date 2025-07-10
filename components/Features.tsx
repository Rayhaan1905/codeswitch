import React from 'react';
import { Zap, Shield, Globe, Code, CheckCircle, Star } from 'lucide-react';

const FeaturesGrid = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Lightning Fast",
      description: "Convert code in under 2 seconds with our optimized AI engine. No more waiting around.",
      gradient: "from-yellow-500/20 to-orange-500/20"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: "Smart Error Handling",
      description: "Advanced error detection and correction ensures your converted code runs flawlessly.",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: "50+ Languages",
      description: "Support for all major programming languages including modern frameworks and libraries.",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: <Code className="w-8 h-8 text-purple-400" />,
      title: "Syntax Preservation",
      description: "Maintains code structure, comments, and logic flow while adapting to target language.",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-teal-400" />,
      title: "99.9% Accuracy",
      description: "Industry-leading accuracy with continuous learning from millions of conversions.",
      gradient: "from-teal-500/20 to-green-500/20"
    },
    {
      icon: <Star className="w-8 h-8 text-pink-400" />,
      title: "AI-Powered",
      description: "Cutting-edge machine learning models trained on billions of lines of code.",
      gradient: "from-pink-500/20 to-rose-500/20"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Why Choose CodeSwitch?
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Built for developers who demand speed, accuracy, and reliability in code conversion
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className={`relative p-8 rounded-2xl bg-gradient-to-br ${feature.gradient} border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 group`}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl"></div>
            <div className="relative">
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesGrid;