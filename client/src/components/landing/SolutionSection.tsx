import { BookOpen, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const chapters = [
  "Mengapa Judi Online Merusak Masa Depan - Fakta & Data Nyata",
  "Titik Balik: Cara Menyadari & Memulai Perubahan",
  "Kenapa Forex dan Bukan Judi Lagi? Perbedaan Fundamental",
  "Langkah Awal Masuk ke Dunia Forex - Panduan Praktis",
  "Strategi Trading yang Terbukti Profitable",
  "Manajemen Risiko & Psikologi Trading",
  "Dari $0 ke $10,000: Roadmap Lengkap",
  "Cara Menghindari Kembali ke Judi Online"
];

interface SolutionSectionProps {
  onCTAClick: () => void;
}

export function SolutionSection({ onCTAClick }: SolutionSectionProps) {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/30 rounded-full mb-4">
            <BookOpen className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent-foreground">Solusi Nyata</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
            Ada Jalan Keluar Yang <span className="text-accent">Lebih Baik</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bukan motivasi kosong - ini panduan praktis dari pengalaman nyata seseorang yang pernah terjebak dan berhasil bangkit
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <Card className="p-8 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
              <div className="aspect-[3/4] bg-gradient-to-br from-primary via-red-600 to-accent rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center p-8">
                  <BookOpen className="w-20 h-20 text-white mx-auto mb-6" />
                  <h3 className="text-3xl font-black text-white mb-2">
                    eBook
                  </h3>
                  <p className="text-xl font-bold text-white mb-4">
                    Cara Keluar dari Judi Online
                  </p>
                  <p className="text-lg font-semibold text-accent">
                    & Raih $10,000 dari Forex
                  </p>
                </div>
              </div>
            </Card>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Apa Yang Akan Kamu Pelajari:
            </h3>
            <div className="space-y-4 mb-8">
              {chapters.map((chapter, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 hover-elevate p-3 rounded-lg transition-all"
                  data-testid={`chapter-${index}`}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center font-bold text-accent-foreground">
                    {index + 1}
                  </div>
                  <p className="text-foreground font-medium pt-1">{chapter}</p>
                </div>
              ))}
            </div>
            
            <Card className="p-6 bg-gradient-to-r from-accent/20 to-accent/10 border-accent/30">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <p className="font-bold text-foreground">Bukan Teori Kosong - Pengalaman Nyata!</p>
              </div>
              <p className="text-muted-foreground mb-6">
                Ditulis oleh Edward Afianto - seseorang yang benar-benar mengalami perjalanan dari kecanduan judi online hingga berhasil profit konsisten dari trading forex.
              </p>
              <Button 
                size="lg" 
                onClick={onCTAClick}
                className="w-full font-bold text-lg hover-elevate active-elevate-2"
                data-testid="button-solution-cta"
              >
                Mulai Perubahan Sekarang
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
