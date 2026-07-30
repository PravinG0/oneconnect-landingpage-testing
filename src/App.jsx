import React, { useState } from 'react';
import { AntigravityCanvas } from './components/canvas/AntigravityCanvas';
import { NavbarHUD } from './components/ui/NavbarHUD';
import { HeroOverlay } from './components/ui/HeroOverlay';
import { PainSolutionSection } from './components/ui/PainSolutionSection';
import { FeatureGridSection } from './components/ui/FeatureGridSection';
import { WhyChooseSection } from './components/ui/WhyChooseSection';
import { IndustriesSection } from './components/ui/IndustriesSection';
import { FaqSection } from './components/ui/FaqSection';
import { Scroll3DSection } from './components/ui/Scroll3DSection';
import { ModuleDetailModal } from './components/ui/ModuleDetailModal';
import { RoiCalculatorModal } from './components/ui/RoiCalculatorModal';
import { DemoModal } from './components/ui/DemoModal';
import { Footer } from './components/ui/Footer';

export default function App() {
  const [selectedModule, setSelectedModule] = useState(null);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isRoiOpen, setIsRoiOpen] = useState(false);

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', background: '#f8fafc' }}>
      {/* 3D Light Space Canvas */}
      <AntigravityCanvas />

      {/* Light Glassmorphism Header */}
      <NavbarHUD
        onOpenDemo={() => setIsDemoOpen(true)}
        onOpenRoi={() => setIsRoiOpen(true)}
      />

      {/* Main 3D Spatial Scroll Content Container */}
      <main className="ui-container">
        {/* Section 1: Hero Section */}
        <Scroll3DSection id="hero">
          <HeroOverlay
            onOpenDemo={() => setIsDemoOpen(true)}
            onOpenRoi={() => setIsRoiOpen(true)}
          />
        </Scroll3DSection>

        {/* Section 2: Legacy Bottlenecks vs 4 Platform Pillars */}
        <Scroll3DSection id="solutions">
          <PainSolutionSection />
        </Scroll3DSection>

        {/* Section 3: 6 Feature Modules Grid */}
        <Scroll3DSection id="features">
          <FeatureGridSection
            onSelectModule={setSelectedModule}
            onOpenDemo={() => setIsDemoOpen(true)}
          />
        </Scroll3DSection>

        {/* Section 4: Why Businesses Choose OneConnect */}
        <Scroll3DSection id="why-choose">
          <WhyChooseSection
            onOpenDemo={() => setIsDemoOpen(true)}
          />
        </Scroll3DSection>

        {/* Section 5: 10 Industries Served */}
        <Scroll3DSection id="industries">
          <IndustriesSection />
        </Scroll3DSection>

        {/* Section 6: Interactive FAQ Accordion */}
        <Scroll3DSection id="faq">
          <FaqSection />
        </Scroll3DSection>

        {/* Section 7: Enterprise Footer */}
        <Scroll3DSection id="footer">
          <Footer
            onOpenDemo={() => setIsDemoOpen(true)}
            onOpenRoi={() => setIsRoiOpen(true)}
          />
        </Scroll3DSection>
      </main>

      {/* Modals & Popups */}
      <ModuleDetailModal
        moduleData={selectedModule}
        onClose={() => setSelectedModule(null)}
        onOpenDemo={() => setIsDemoOpen(true)}
      />

      <RoiCalculatorModal
        isOpen={isRoiOpen}
        onClose={() => setIsRoiOpen(false)}
        onOpenDemo={() => setIsDemoOpen(true)}
      />

      <DemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
      />
    </div>
  );
}
