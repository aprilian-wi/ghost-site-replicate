import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Clock, CheckCircle, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/6285180537299?text=Halo%20Ajaib%20Call%20Center%2C%20saya%20ingin%20mendapatkan%20informasi%20lebih%20lanjut.",
      "_blank"
    );
  };

  const handlePhone = () => {
    window.location.href = "tel:+6285180537299";
  };

  return (
    <section className="bg-background py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Call Center Ajaib & Nomor Whatsapp Ajaib Cs resmi Ajaib Investasi
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Tim customer service profesional Ajaib siap membantu Anda 24/7. Dapatkan solusi terbaik untuk setiap kebutuhan Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp: 085180537299
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={handlePhone}
              className="gap-2"
            >
              <Phone className="w-5 h-5" />
              Telepon Langsung
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tim Profesional</h3>
            <p className="text-muted-foreground">
              Customer service berpengalaman dan terlatih
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Layanan 24/7</h3>
            <p className="text-muted-foreground">
              Siap membantu Anda kapan saja dibutuhkan
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Terpercaya</h3>
            <p className="text-muted-foreground">
              Solusi terbaik dengan tingkat kepuasan tinggi
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
