
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import HowItWorks from '@/components/HowItWorks';
import Integrations from '@/components/Integrations';
import Cta from '@/components/Cta';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main>
        {/* 1. Hero */}
        <HeroSection />
        {/* 2. Key Features */}
        <Features />
        {/* 3. How it works */}
        <HowItWorks />
        {/* 4. Integrations */}
        <Integrations />
        {/* 5. Pricing */}
        <Pricing />
        {/* 6. CTA */}
        <Cta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
