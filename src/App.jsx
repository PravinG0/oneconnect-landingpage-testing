import React, { useState } from 'react';
import { AntigravityCanvas } from './components/canvas/AntigravityCanvas';
import { NavbarHUD } from './components/ui/NavbarHUD';
import { Scroll3DSection } from './components/ui/Scroll3DSection';
import { HeroSection } from './components/ui/HeroSection';
import { TrustedBySection } from './components/ui/TrustedBySection';
import { CoreValueSection } from './components/ui/CoreValueSection';
import { ProductOverviewSection } from './components/ui/ProductOverviewSection';
import { WhyOneConnectSection } from './components/ui/WhyOneConnectSection';
import { ComparisonSection } from './components/ui/ComparisonSection';
import { GrowthStageSection } from './components/ui/GrowthStageSection';
import { HowItWorksSection } from './components/ui/HowItWorksSection';
import { PositioningSection } from './components/ui/PositioningSection';
import { TestimonialsSection } from './components/ui/TestimonialsSection';
import { FaqSection } from './components/ui/FaqSection';
import { FinalCtaSection } from './components/ui/FinalCtaSection';
import { Footer } from './components/ui/Footer';
import { ModuleDetailModal } from './components/ui/ModuleDetailModal';
import { DemoModal } from './components/ui/DemoModal';

export default function App() {
  const [selectedModule, setSelectedModule] = useState(null);
  // 'demo' | 'trial' | null - both use the same form with different copy
  const [formVariant, setFormVariant] = useState(null);

  const openDemo = () => setFormVariant('demo');
  const openTrial = () => setFormVariant('trial');

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', background: '#f8fafc' }}>
      {/* Light 3D spatial background */}
      <AntigravityCanvas />
      <div className="canvas-veil" />

      <NavbarHUD onOpenDemo={openDemo} onOpenTrial={openTrial} />

      <main className="ui-container">
        {/* Hero + logo rail */}
        <HeroSection onOpenDemo={openDemo} onOpenTrial={openTrial} />
        <TrustedBySection />

        {/* Scattered tools converge into one process */}
        <Scroll3DSection>
          <CoreValueSection />
        </Scroll3DSection>

        {/* Alternating showcase rows, one per module */}
        <ProductOverviewSection onSelectModule={setSelectedModule} />

        {/* Numbered reason list */}
        <Scroll3DSection>
          <WhyOneConnectSection onOpenDemo={openDemo} />
        </Scroll3DSection>

        {/* Before -> after transformation spine */}
        <Scroll3DSection>
          <ComparisonSection />
        </Scroll3DSection>

        {/* Persona rail */}
        <Scroll3DSection>
          <GrowthStageSection />
        </Scroll3DSection>

        {/* Journey path */}
        <Scroll3DSection>
          <HowItWorksSection />
        </Scroll3DSection>

        {/* Full-width dark band - no tilt, it spans the viewport */}
        <PositioningSection />

        <Scroll3DSection>
          <TestimonialsSection onOpenDemo={openDemo} />
        </Scroll3DSection>

        <Scroll3DSection>
          <FaqSection onOpenDemo={openDemo} />
        </Scroll3DSection>

        {/* Full-width closing band */}
        <FinalCtaSection onOpenDemo={openDemo} onOpenTrial={openTrial} />

        <Footer onOpenDemo={openDemo} onOpenTrial={openTrial} />
      </main>

      {/* Overlays */}
      <ModuleDetailModal
        moduleData={selectedModule}
        onClose={() => setSelectedModule(null)}
        onOpenDemo={openDemo}
      />

      <DemoModal
        isOpen={formVariant !== null}
        variant={formVariant || 'demo'}
        onClose={() => setFormVariant(null)}
      />
    </div>
  );
}
