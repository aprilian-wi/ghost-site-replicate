import { Card } from "@/components/ui/card";
import { Phone, MessageCircle, Mail, Briefcase, Wrench, Star } from "lucide-react";

const services = [
  {
    icon: Phone,
    title: "Layanan Telepon",
    description: "Hubungi langsung melalui telepon untuk konsultasi dan bantuan segera dari tim ahli kami.",
  },
  {
    icon: MessageCircle,
    title: "Chat WhatsApp",
    description: "Komunikasi praktis via WhatsApp untuk pertanyaan cepat dan koordinasi yang efisien.",
  },
  {
    icon: Mail,
    title: "Support Email",
    description: "Kirim pertanyaan detail melalui email untuk mendapatkan jawaban komprehensif dari tim kami.",
  },
  {
    icon: Briefcase,
    title: "Konsultasi Bisnis",
    description: "Dapatkan saran profesional untuk mengembangkan strategi bisnis dan customer service yang efektif.",
  },
  {
    icon: Wrench,
    title: "Technical Support",
    description: "Bantuan teknis profesional untuk mengatasi berbagai masalah sistem dan aplikasi.",
  },
  {
    icon: Star,
    title: "Premium Service",
    description: "Layanan prioritas dengan response time cepat dan dedicated account manager.",
  },
];

const Services = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Layanan Call Center Ajaib
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan customer service profesional untuk mendukung bisnis dan kebutuhan Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-shadow hover:-translate-y-1 transition-transform duration-300"
              >
                <Icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
