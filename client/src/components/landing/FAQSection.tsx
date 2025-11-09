import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Apakah ini scam atau penipuan?",
    answer:
      "Tidak. Ini adalah eBook berisi pengalaman nyata dan panduan praktis. Kami memberikan garansi uang kembali 100% dalam 7 hari jika kamu merasa tidak puas. Lebih dari 2000 orang sudah membaca dan menerapkan panduan ini dengan hasil positif.",
  },
  {
    question: "Berapa modal yang dibutuhkan untuk mulai trading forex?",
    answer:
      "Di eBook dijelaskan bahwa kamu bisa mulai dengan modal kecil, bahkan dari $10 (sekitar Rp 150.000). Yang penting adalah belajar dulu dengan akun demo, pahami sistemnya, baru trading dengan uang sungguhan. Fokus pada skill, bukan modal besar.",
  },
  {
    question: "Apakah trading forex sama dengan judi online?",
    answer:
      "Beda total! Judi online murni untung-untungan dan sistemnya dirancang agar kamu kalah. Trading forex adalah skill yang bisa dipelajari dengan analisa teknikal dan fundamental. Di eBook dijelaskan secara detail perbedaan keduanya dan kenapa forex lebih masuk akal.",
  },
  {
    question: "Berapa lama waktu yang dibutuhkan untuk profit $10,000?",
    answer:
      "Kami akan Pandu anda, tergantung konsistensi belajar dan menerapkan strategi. Yang pasti, ini bukan skema cepat kaya. eBook ini memberikan roadmap realistis dan strategi yang sudah terbukti bekerja.",
  },
  {
    question:
      "Apakah cocok untuk pemula yang nggak ngerti trading sama sekali?",
    answer:
      "Sangat cocok! eBook ini ditulis dengan bahasa sederhana dan dimulai dari nol. Dijelaskan step-by-step dari istilah dasar, cara memilih broker, sampai strategi trading. Bahkan ada panduan khusus untuk mental dan psikologi trading.",
  },
  {
    question: "Bagaimana cara downloadnya setelah bayar?",
    answer:
      "Setelah pembayaran berhasil, kamu akan langsung mendapat link download via email dan WhatsApp. Aksesnya instant, jadi kamu bisa langsung baca dan mulai belajar.",
  },
  {
    question: "Apa bedanya eBook ini dengan yang gratis di internet?",
    answer:
      "eBook gratis biasanya cuma teori dagang. Ini berbeda - ini pengalaman NYATA dari seseorang yang benar-benar mengalami kecanduan judi online dan berhasil bangkit lewat forex. Lengkap dengan mindset, strategi praktis, dan roadmap yang proven works.",
  },
  {
    question: "Apakah ada support atau bimbingan setelah beli?",
    answer:
      "Ya! Kamu akan dapat akses ke grup support WhatsApp dimana kamu bisa bertanya dan berdiskusi dengan sesama pembaca. Plus ada bonus konsultasi gratis untuk membantu kamu memulai.",
  },
];

export function FAQSection() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-4">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">FAQ</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
            Pertanyaan Yang Sering Ditanyakan
          </h2>
          <p className="text-xl text-muted-foreground">
            Kami jawab semua keraguan kamu
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background border border-border rounded-lg px-6 data-[state=open]:border-primary/50"
              data-testid={`faq-${index}`}
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-lg font-bold text-foreground pr-4">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
