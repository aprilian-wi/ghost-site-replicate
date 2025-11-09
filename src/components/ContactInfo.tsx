import { Card } from "@/components/ui/card";
import { Phone, MessageCircle, Clock, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Informasi Kontak
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 text-center">
            <Phone className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Telepon</h3>
            <p className="text-muted-foreground">085180537299</p>
          </Card>

          <Card className="p-6 text-center">
            <MessageCircle className="w-10 h-10 text-accent mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
            <p className="text-muted-foreground">085180537299</p>
          </Card>

          <Card className="p-6 text-center">
            <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Jam Operasional</h3>
            <p className="text-muted-foreground">Senin - Minggu</p>
            <p className="text-muted-foreground text-sm">08:00 - 20:00 WIB</p>
          </Card>

          <Card className="p-6 text-center">
            <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Lokasi</h3>
            <p className="text-muted-foreground">Customer Service</p>
            <p className="text-muted-foreground text-sm">Seluruh Indonesia</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
