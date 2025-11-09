import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const FinalCTA = () => {
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
    <section className="py-16 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Siap Membantu Anda Sekarang Juga!
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Jangan ragu untuk menghubungi tim customer service profesional Ajaib. Kami siap memberikan solusi terbaik untuk kebutuhan Anda.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
            onClick={handleWhatsApp}
          >
            <MessageCircle className="w-5 h-5" />
            Chat WhatsApp Sekarang
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={handlePhone}
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 gap-2"
          >
            <Phone className="w-5 h-5" />
            085180537299
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
