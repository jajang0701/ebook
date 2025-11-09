import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onCTAClick: () => void;
}

export function HeroSection({ onCTAClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ef4444' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full">
          <p className="text-sm font-semibold text-primary flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Lebih dari 2000+ orang sudah berubah
          </p>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
          Berhenti <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-500 to-accent">Judi Online</span>,
          <br />
          Mulai <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-400 to-yellow-500">Trading Forex</span>
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-bold mb-4">
          Dari Rugi Ratusan Juta ke Profit Konsisten <span className="text-accent">$10,000</span>
        </p>
        
        <p className="text-base sm:text-lg text-gray-400 mb-10 max-w-3xl mx-auto">
          Panduan lengkap untuk keluar dari jeratan judi online dan memulai perjalanan trading forex yang profitable. Bukan teori kosong - ini pengalaman nyata!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            onClick={onCTAClick}
            className="text-lg px-8 py-6 font-bold uppercase hover-elevate active-elevate-2 shadow-lg shadow-primary/50"
            data-testid="button-hero-cta"
          >
            Dapatkan eBook Sekarang
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-lg px-8 py-6 font-bold bg-white/10 backdrop-blur-sm border-accent/50 text-white hover:bg-accent/20"
            data-testid="button-hero-testimonials"
          >
            Lihat Testimoni
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-green-400" data-testid="badge-guarantee">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-semibold">2000+ Sudah Berubah</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-green-400" data-testid="badge-complete">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-semibold">Panduan Lengkap</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-green-400" data-testid="badge-support">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-semibold">Gratis Konsultasi</span>
          </div>
        </div>
      </div>
    </section>
  );
}
