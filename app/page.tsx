import React from 'react';
import HeroSection from '@/components/Hero';
import FeaturesGrid from '@/components/Features';
import DemoSection from '@/components/Demo';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <HeroSection />
      <FeaturesGrid />
      <DemoSection />
      <Footer />
    </div>
  );
};
export default Home