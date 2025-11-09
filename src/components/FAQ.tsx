import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Nomor Call Center Ajaib ?",
    answer: (
      <div className="space-y-2">
        <p>Nomor telepon yang tercantum untuk Ajaib Sekuritas Asia adalah:</p>
        <p className="font-semibold">+62851 8053 7299</p>
        <p>Selain itu, Anda juga bisa menghubungi tim support Ajaib melalui email berdasarkan jenis pertanyaannya:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>support.saham@ajaib.co.id – Untuk pertanyaan dan kendala terkait investasi saham.</li>
          <li>support.reksadana@ajaib.co.id – Untuk pertanyaan dan kendala terkait reksa dana.</li>
          <li>support.asetkripto@ajaib.co.id – Untuk pertanyaan dan kendala terkait aset kripto.</li>
        </ul>
        <p>Ajaib juga menyebutkan adanya WhatsApp resmi di nomor +62 851-8053-7299.</p>
      </div>
    ),
  },
  {
    question: "Nomor WhatsApp Ajaib?",
    answer: "Nomor WhatsApp Ajaib yang merupakan kontak layanan bantuan resmi Ajaib adalah +62 851-8053-7299, namun penting untuk selalu memeriksa akun media sosial resmi Ajaib (seperti Instagram @ajaib_investasi) untuk informasi kontak yang paling akurat dan terverifikasi untuk keamanan Anda.",
  },
  {
    question: "Berapa lama waktu respon customer service?",
    answer: "Kami berkomitmen memberikan respon dalam waktu maksimal 15 menit untuk chat WhatsApp dan 5 menit untuk panggilan telepon selama jam operasional.",
  },
  {
    question: "Apakah ada biaya untuk konsultasi?",
    answer: "Konsultasi dasar melalui WhatsApp dan telepon gratis. Untuk layanan konsultasi bisnis mendalam atau technical support khusus, kami akan menginformasikan terlebih dahulu jika ada biaya yang terkait.",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pertanyaan Sering Diajukan
          </h2>
          <p className="text-lg text-muted-foreground">
            Temukan jawaban untuk pertanyaan umum tentang layanan call center kami
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {typeof faq.answer === 'string' ? faq.answer : faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
