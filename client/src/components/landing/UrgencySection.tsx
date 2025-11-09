import { useEffect, useState } from "react";
import { Clock, Gift, Users, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface UrgencySectionProps {
  onCTAClick: () => void;
}

export function UrgencySection({ onCTAClick }: UrgencySectionProps) {
  const getInitialCountdown = () => {
    const stored = localStorage.getItem('countdown_end_time');
    if (stored) {
      const endTime = parseInt(stored);
      const now = Date.now();
      const diff = Math.max(0, endTime - now);
      
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      return { hours, minutes, seconds };
    }
    
    const endTime = Date.now() + (24 * 60 * 60 * 1000);
    localStorage.setItem('countdown_end_time', endTime.toString());
    return { hours: 23, minutes: 59, seconds: 59 };
  };

  const getInitialSlots = () => {
    const stored = localStorage.getItem('slots_remaining');
    return stored ? parseInt(stored) : 47;
  };

  const [timeLeft, setTimeLeft] = useState(getInitialCountdown);
  const [slots, setSlots] = useState(getInitialSlots);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    const slotTimer = setInterval(() => {
      setSlots(prev => {
        const newSlots = Math.max(15, prev - 1);
        localStorage.setItem('slots_remaining', newSlots.toString());
        return newSlots;
      });
    }, 45000);

    return () => {
      clearInterval(timer);
      clearInterval(slotTimer);
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-red-600 to-red-700 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-4">
            <Zap className="w-4 h-4 text-white animate-pulse" />
            <span className="text-sm font-semibold text-white uppercase">Promo Terbatas!</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            JANGAN SAMPAI MENYESAL!
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Harga spesial dan bonus eksklusif hanya untuk hari ini
          </p>
        </div>
        
        <Card className="p-8 bg-white/10 backdrop-blur-md border-white/30 mb-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Clock className="w-8 h-8 text-white animate-pulse" />
            <h3 className="text-2xl font-black text-white uppercase">Promo Berakhir Dalam:</h3>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center border border-white/30">
              <p className="text-5xl font-black text-white mb-2" data-testid="countdown-hours">
                {String(timeLeft.hours).padStart(2, '0')}
              </p>
              <p className="text-sm font-semibold text-white/80 uppercase">Jam</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center border border-white/30">
              <p className="text-5xl font-black text-white mb-2" data-testid="countdown-minutes">
                {String(timeLeft.minutes).padStart(2, '0')}
              </p>
              <p className="text-sm font-semibold text-white/80 uppercase">Menit</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center border border-white/30">
              <p className="text-5xl font-black text-white mb-2" data-testid="countdown-seconds">
                {String(timeLeft.seconds).padStart(2, '0')}
              </p>
              <p className="text-sm font-semibold text-white/80 uppercase">Detik</p>
            </div>
          </div>
          
          <div className="bg-accent/20 backdrop-blur-sm border-2 border-accent rounded-lg p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-white" />
              <p className="text-lg font-bold text-white">
                HANYA <span className="text-3xl text-accent" data-testid="slots-remaining">{slots} SLOT</span> TERSISA HARI INI!
              </p>
            </div>
            <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden">
              <div 
                className="bg-accent h-full rounded-full transition-all duration-500"
                style={{ width: `${(slots / 100) * 100}%` }}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Gift className="w-8 h-8 text-accent flex-shrink-0" />
              <div>
                <p className="text-sm text-white/80">Bonus #1</p>
                <p className="font-bold text-white">Template Strategi Trading</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Gift className="w-8 h-8 text-accent flex-shrink-0" />
              <div>
                <p className="text-sm text-white/80">Bonus #2</p>
                <p className="font-bold text-white">Akses Grup Support</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Gift className="w-8 h-8 text-accent flex-shrink-0" />
              <div>
                <p className="text-sm text-white/80">Bonus #3</p>
                <p className="font-bold text-white">Konsultasi Gratis</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-6">
            <p className="text-gray-300 mb-2 line-through text-2xl">Harga Normal: Rp 497.000</p>
            <p className="text-5xl font-black text-accent mb-4">
              Harga Promo: Rp 97.000
            </p>
            <p className="text-white font-semibold">Hemat Rp 400.000 (80% OFF!)</p>
          </div>
          
          <Button 
            size="lg"
            onClick={onCTAClick}
            className="w-full text-xl font-black py-8 bg-accent hover:bg-accent/90 text-accent-foreground uppercase shadow-2xl hover-elevate active-elevate-2"
            data-testid="button-urgency-cta"
          >
            Ambil Promo Sekarang - Rp 97.000
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
        </Card>
        
        <p className="text-center text-white/80 text-sm">
          *Setelah promo berakhir, harga akan kembali ke Rp 497.000
        </p>
      </div>
    </section>
  );
}
