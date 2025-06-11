import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/guides/plantar-fasciitis", label: "Injury Guides" },
    { href: "/videos", label: "Video Library" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" onClick={closeMobileMenu}>
              <div className="text-2xl font-bold text-brand-teal cursor-pointer">
                BraceCraft
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer ${
                      isActive(item.href)
                        ? "text-charcoal"
                        : "text-gray-custom hover:text-athletic-blue"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
              <Button className="bg-athletic-blue text-white hover:bg-athletic-blue/90">
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="text-gray-custom hover:text-charcoal"
              aria-label="Open mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-light-gray">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={closeMobileMenu}>
                  <span
                    className={`block px-3 py-2 text-base font-medium cursor-pointer ${
                      isActive(item.href)
                        ? "text-charcoal"
                        : "text-gray-custom hover:text-athletic-blue"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
              <Button className="w-full text-left bg-athletic-blue text-white hover:bg-athletic-blue/90 mt-4">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
