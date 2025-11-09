import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = encodeURIComponent(
      `Halo, saya ${name}\nEmail: ${email}\nPesan: ${message}`
    );
    
    window.open(
      `https://wa.me/6285180537299?text=${whatsappMessage}`,
      "_blank"
    );
    
    toast({
      title: "Mengarahkan ke WhatsApp",
      description: "Anda akan diarahkan ke WhatsApp untuk mengirim pesan.",
    });
    
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Hubungi Kami
          </h2>
          <p className="text-lg text-muted-foreground">
            Isi form dibawah ini dan kami akan menghubungi Anda melalui WhatsApp
          </p>
        </div>

        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nama Lengkap
              </label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Masukkan nama lengkap Anda"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="contoh@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Pesan
              </label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                placeholder="Tulis pesan Anda di sini..."
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
              size="lg"
            >
              <MessageCircle className="w-5 h-5" />
              Kirim via WhatsApp
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;
