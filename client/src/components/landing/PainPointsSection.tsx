import { AlertTriangle, CreditCard, Users, TrendingDown, Brain } from "lucide-react";
import { Card } from "@/components/ui/card";

const painPoints = [
  {
    icon: CreditCard,
    title: "Gaji Habis Sebelum Tanggal 15?",
    description: "Setiap bulan, uang habis untuk judi. Kebutuhan terabaikan, utang menumpuk, masa depan hancur.",
    stat: "78% penjudi online kehilangan lebih dari 5x gaji mereka"
  },
  {
    icon: Brain,
    title: "Stress & Depresi Tiap Hari?",
    description: "Kalah terus, pikiran kacau, susah tidur. Bahkan mulai berpikir untuk bunuh diri.",
    stat: "63% mengalami gangguan mental serius"
  },
  {
    icon: Users,
    title: "Bohong ke Keluarga Jadi Kebiasaan?",
    description: "Mulai berbohong tentang uang, waktu, dan kehidupan. Hubungan dengan orang terdekat hancur.",
    stat: "71% kehilangan kepercayaan keluarga"
  },
  {
    icon: TrendingDown,
    title: "Karir & Produktivitas Menurun?",
    description: "Kerja jadi nggak fokus. Pikiran cuma tertuju pada bagaimana 'balik modal'. Potensi diri terbuang sia-sia.",
    stat: "85% mengalami penurunan kinerja kerja"
  }
];

export function PainPointsSection() {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-red-950/20 to-gray-900" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-4">
            <AlertTriangle className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Realita Pahit</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Apakah Ini Yang Kamu Rasakan?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Judi online bukan sekadar "hiburan" - ini adalah jerat yang perlahan menghancurkan hidupmu
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {painPoints.map((point, index) => (
            <Card 
              key={index}
              className="p-8 bg-gray-800/50 border-gray-700 hover-elevate transition-all duration-300"
              data-testid={`card-pain-${index}`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-lg border border-primary/30 flex-shrink-0">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{point.description}</p>
                  <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-md">
                    <p className="text-sm font-semibold text-primary">{point.stat}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center bg-gradient-to-r from-primary/10 via-red-900/20 to-primary/10 border border-primary/30 rounded-xl p-8">
          <p className="text-2xl font-bold text-white mb-2">
            Total kerugian pemain judi online di Indonesia mencapai
          </p>
          <p className="text-5xl font-black text-primary mb-2">
            Rp 150 Triliun
          </p>
          <p className="text-gray-400">
            per tahun - Uang yang seharusnya bisa mengubah hidup jutaan keluarga
          </p>
        </div>
      </div>
    </section>
  );
}
