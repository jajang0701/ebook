import { useEffect, useRef } from "react";
import { HeroSection } from "@/components/landing/HeroSection";
import { PainPointsSection } from "@/components/landing/PainPointsSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { BeforeAfterSection } from "@/components/landing/BeforeAfterSection";
import { UrgencySection } from "@/components/landing/UrgencySection";
import { OrderFormSection } from "@/components/landing/OrderFormSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { FloatingElements } from "@/components/landing/FloatingElements";

export default function LandingPage() {
  const orderFormRef = useRef<HTMLDivElement>(null);

  const scrollToOrderForm = () => {
    orderFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.orderonline.id/js/embed-v2-slim.min.js?v=8.0.4';
    script.async = true;
    script.id = 'oo-embed-js';
    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById('oo-embed-js');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onCTAClick={scrollToOrderForm} />
      <PainPointsSection />
      <SolutionSection onCTAClick={scrollToOrderForm} />
      <TestimonialsSection />
      <BeforeAfterSection />
      <UrgencySection onCTAClick={scrollToOrderForm} />
      <div ref={orderFormRef}>
        <OrderFormSection />
      </div>
      <FAQSection />
      <FinalCTASection onCTAClick={scrollToOrderForm} />
      <FloatingElements onCTAClick={scrollToOrderForm} />
    </div>
  );
}
