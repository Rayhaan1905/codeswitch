import React from 'react';
import { ArrowRight, Sparkles, Users, Clock, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-3xl"></div>
      <div className="relative container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full mb-6 border border-purple-500/30">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">AI-Powered Code Transformation</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6 leading-tight">
            CodeSwitch
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed">
            Transform Your Code Across Languages in Seconds
          </p>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            The world's fastest, most accurate code conversion platform. Convert between 50+ programming languages with intelligent error handling and preservation of code logic.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href='#demo' className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Start Converting Now
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
          </div>
          
          
            
            
          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;