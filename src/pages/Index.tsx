import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <ContactForm />
      <ContactInfo />
      <FAQ />
      <FinalCTA />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
