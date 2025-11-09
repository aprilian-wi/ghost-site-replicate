import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open(
      "https://wa.me/6285180537299?text=Halo%20Ajaib%20Call%20Center%2C%20saya%20ingin%20mendapatkan%20informasi%20lebih%20lanjut.",
      "_blank"
    );
  };

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="fixed bottom-6 right-6 rounded-full w-16 h-16 shadow-lg bg-accent hover:bg-accent/90 text-accent-foreground z-50 animate-bounce hover:animate-none"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </Button>
  );
};

export default WhatsAppButton;
