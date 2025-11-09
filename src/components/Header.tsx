import { Phone, Clock } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground py-3 px-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Phone className="w-5 h-5" />
          <div>
            <h1 className="font-bold text-lg">Call Center Ajaib</h1>
            <p className="text-xs opacity-90">Pusat Bantuan Ajaib</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Clock className="w-4 h-4" />
          <span className="hidden sm:inline">Buka Sekarang | 11:59</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
