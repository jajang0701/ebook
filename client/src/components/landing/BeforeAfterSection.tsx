import { X, Check, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const beforeItems = [
  "Gaji habis sebelum tanggal 15",
  "Utang menumpuk Rp 50-200 juta+",
  "Stress, depresi, pikiran bunuh diri",
  "Bohong ke keluarga & teman",
  "Kerja tidak fokus, kinerja menurun",
  "Tidur gelisah, mimpi buruk",
  "Kehilangan kepercayaan diri",
  "Masa depan tidak jelas"
];

const afterItems = [
  "Profit konsisten $8,000-$15,000/bulan",
  "Utang lunas, keuangan teratur",
  "Mental sehat, hidup lebih tenang",
  "Jujur & dipercaya keluarga",
  "Fokus kerja, produktivitas meningkat",
  "Tidur nyenyak, bangun semangat",
  "Percaya diri & punya tujuan hidup",
  "Masa depan cerah & terencana"
];

export function BeforeAfterSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ef4444' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Transformasi Nyata: <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">DULU vs SEKARANG</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Inilah perbedaan hidup sebelum dan sesudah keluar dari judi online
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-8 bg-gradient-to-br from-red-950/50 to-red-900/30 border-2 border-red-500/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-red-500/20 rounded-lg">
                  <X className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-3xl font-black text-white uppercase">Dulu</h3>
              </div>
              <div className="space-y-3">
                {beforeItems.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-3 bg-red-950/30 rounded-lg border border-red-500/20"
                    data-testid={`before-item-${index}`}
                  >
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
          
          <Card className="p-8 bg-gradient-to-br from-yellow-950/30 to-yellow-900/20 border-2 border-accent/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent/20 rounded-lg">
                  <Check className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-3xl font-black text-white uppercase">Sekarang</h3>
              </div>
              <div className="space-y-3">
                {afterItems.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-3 bg-accent/10 rounded-lg border border-accent/30 hover-elevate transition-all"
                    data-testid={`after-item-${index}`}
                  >
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-gray-200 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-primary via-red-600 to-accent rounded-full">
            <ArrowRight className="w-6 h-6 text-white animate-pulse" />
            <p className="text-xl font-black text-white uppercase">
              Perubahan Dimulai Hari Ini
            </p>
            <ArrowRight className="w-6 h-6 text-white animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
