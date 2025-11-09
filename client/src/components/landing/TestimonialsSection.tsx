import { Star, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Budi Santoso",
    age: 28,
    location: "Jakarta",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Budi&backgroundColor=b6e3f4",
    quote: "Dulu gue habiskan 150 juta dalam setahun untuk slot online. Sekarang udah 6 bulan profit konsisten dari forex. Total profit udah $12,847. Hidup gue berubah total!",
    result: "$12,847",
    period: "6 bulan"
  },
  {
    name: "Rina Wijaya",
    age: 25,
    location: "Surabaya",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rina&backgroundColor=ffdfbf",
    quote: "Sebagai mantan admin live casino, aku tahu sistemnya. Tapi aku tetap main dan rugi 80 juta. eBook ini buka mataku. Sekarang aku trader, profit $8,450 dan masih terus belajar.",
    result: "$8,450",
    period: "4 bulan"
  },
  {
    name: "Ahmad Fauzi",
    age: 32,
    location: "Bandung",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad&backgroundColor=c0aede",
    quote: "Utang pinjol 180 juta karena judi. Hampir putus asa. Baca eBook ini, mulai trading dengan disiplin. Sekarang utang lunas dan profit $15,200. Keluarga bangga!",
    result: "$15,200",
    period: "8 bulan"
  },
  {
    name: "Dewi Lestari",
    age: 27,
    location: "Medan",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dewi&backgroundColor=ffd5dc",
    quote: "Main judi online 2 tahun, rugi total 95 juta. Hubungan dengan keluarga hancur. Setelah baca dan apply panduan di eBook, hidup berubah. Profit $9,680 dan mental jauh lebih sehat!",
    result: "$9,680",
    period: "5 bulan"
  },
  {
    name: "Ryan Pratama",
    age: 30,
    location: "Semarang",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ryan&backgroundColor=d1d4f9",
    quote: "Gaji 12 juta habis sebelum tanggal 20 setiap bulan. Istri hampir cerai. eBook ini nyelamatin hidup gue. Trading forex sekarang jadi income tambahan. Profit $11,300 dan terus konsisten!",
    result: "$11,300",
    period: "7 bulan"
  },
  {
    name: "Siti Nurhaliza",
    age: 26,
    location: "Yogyakarta",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Siti&backgroundColor=b6e3f4",
    quote: "Nyaris bunuh diri karena hutang judi 120 juta. Orang tua jual rumah buat bayarin. Baca eBook ini, belajar forex, sekarang bisa bantu orang tua. Profit $10,150. Terima kasih!",
    result: "$10,150",
    period: "6 bulan"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/30 rounded-full mb-4">
            <TrendingUp className="w-4 h-4 text-accent-foreground" />
            <span className="text-sm font-semibold text-accent-foreground">Bukti Nyata</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
            Mereka Sudah Berubah, <span className="text-primary">Sekarang Giliranmu</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ribuan orang Indonesia sudah keluar dari judi online dan meraih profit konsisten dari forex
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 hover-elevate transition-all duration-300"
              data-testid={`testimonial-${index}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-2 border-accent"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-foreground">{testimonial.name}, {testimonial.age}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-sm text-foreground mb-4 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <p className="text-xs text-muted-foreground">Total Profit</p>
                  <p className="text-2xl font-black text-accent">{testimonial.result}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Dalam</p>
                  <p className="text-sm font-bold text-foreground">{testimonial.period}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            Dan masih <span className="font-bold text-primary">2000+ testimoni lainnya</span> yang membuktikan metode ini bekerja!
          </p>
        </div>
      </div>
    </section>
  );
}
