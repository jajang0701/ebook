import { ArrowRight, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FinalCTASectionProps {
  onCTAClick: () => void;
}

export function FinalCTASection({ onCTAClick }: FinalCTASectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(239, 68, 68, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
          Saatnya Mengubah Hidup,<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-500 to-accent">
            Mulai Sekarang!
          </span>
        </h2>
        
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Jangan biarkan satu hari lagi terbuang sia-sia dalam lingkaran judi online
        </p>
        
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/20 rounded-lg flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-white mb-2">Investasi Terkecil</h3>
                <p className="text-gray-300 text-sm">
                  Harga 1x kalah slot = panduan lengkap untuk masa depan lebih baik
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/20 rounded-lg flex-shrink-0">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-white mb-2">100% Bebas Risiko</h3>
                <p className="text-gray-300 text-sm">
                  Garansi uang kembali penuh dalam 7 hari tanpa pertanyaan
                </p>
              </div>
            </div>
          </div>
          
          <Button 
            size="lg"
            onClick={onCTAClick}
            className="w-full sm:w-auto text-xl font-black py-8 px-12 uppercase shadow-2xl hover-elevate active-elevate-2"
            data-testid="button-final-cta"
          >
            Ya, Saya Mau Berubah Sekarang!
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
        </div>
        
        <div className="space-y-3 text-gray-400 text-sm">
          <p className="font-semibold">Jangan Sampai Menyesal Besok Ketika:</p>
          <ul className="space-y-2">
            <li>✗ Harga naik kembali ke Rp 497.000</li>
            <li>✗ Bonus eksklusif sudah tidak tersedia</li>
            <li>✗ Kamu kehilangan waktu & uang lagi di judi online</li>
          </ul>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-white font-bold text-lg mb-2">
            "Perubahan dimulai dari keputusan kecil hari ini"
          </p>
          <p className="text-gray-400">
            - Edward Afianto, Penulis eBook
          </p>
        </div>
      </div>
    </section>
  );
}
