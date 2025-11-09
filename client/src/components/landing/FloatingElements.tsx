import { useState, useEffect } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FloatingElementsProps {
  onCTAClick: () => void;
}

export function FloatingElements({ onCTAClick }: FloatingElementsProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      setShowStickyCTA(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20eBook%20Cara%20Keluar%20dari%20Judi%20Online', '_blank');
  };

  return (
    <>
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        aria-label="Chat WhatsApp"
        data-testid="button-whatsapp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
      </button>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-50 w-12 h-12 bg-gray-800 hover:bg-gray-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          aria-label="Scroll to top"
          data-testid="button-scroll-top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      {showStickyCTA && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-primary border-t-4 border-accent shadow-2xl md:hidden">
          <div className="p-4">
            <Button 
              size="lg"
              onClick={onCTAClick}
              className="w-full font-bold text-base uppercase hover-elevate active-elevate-2 bg-accent text-accent-foreground hover:bg-accent/90"
              data-testid="button-sticky-mobile-cta"
            >
              Beli Sekarang - Rp 97.000
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
