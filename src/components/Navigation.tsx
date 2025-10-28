import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Hem" },
    { to: "/om-viksta-lasse", label: "Om Viksta-Lasse" },
    { to: "/om-stiftelsen", label: "Om Stiftelsen" },
    { to: "/styrelse", label: "Styrelse" },
    { to: "/stipendier", label: "Stipendier" },
    { to: "/kalender", label: "Kalender" },
    { to: "/bildgalleri", label: "Bildgalleri" },
    { to: "/kontakt", label: "Kontakt" },
  ];

  return (
    <nav className="bg-viksta-dark border-b border-viksta-gold/20 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="text-2xl font-bold text-viksta-gold">Viksta-Lasse</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "px-4 py-2 rounded-md text-base font-medium transition-colors",
                  location.pathname === link.to
                    ? "text-viksta-gold bg-viksta-gold/10"
                    : "text-viksta-gold/80 hover:text-viksta-gold hover:bg-viksta-gold/5"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-viksta-gold/10 text-viksta-gold"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-md text-base font-medium transition-colors",
                  location.pathname === link.to
                    ? "text-viksta-gold bg-viksta-gold/10"
                    : "text-viksta-gold/80 hover:text-viksta-gold hover:bg-viksta-gold/5"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
