
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Features", path: "/features" },
    { name: "Insights", action: () => handleScrollTo("recent-insights") },
    { name: "Investors", path: "/investors" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", action: () => handleScrollTo("footer") },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/lovable-uploads/eae8e393-ede9-40a5-8356-2bd995264322.png"
                alt="Techealth Apex Logo"
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => {
              if (link.path) {
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="px-4 py-2 rounded-md text-sm font-medium bg-white text-gray-700 hover:text-techealth-green shadow-sm border border-gray-100 hover:shadow-md transition-all"
                  >
                    {link.name}
                  </Link>
                );
              } else {
                return (
                  <button
                    key={link.name}
                    onClick={link.action}
                    className="px-4 py-2 rounded-md text-sm font-medium bg-white text-gray-700 hover:text-techealth-green shadow-sm border border-gray-100 hover:shadow-md transition-all"
                  >
                    {link.name}
                  </button>
                );
              }
            })}
            <Button 
              onClick={() => handleScrollTo("request-demo")}
              className="ml-2 bg-techealth-blue hover:bg-techealth-darkblue shadow-md hover:shadow-lg transition-all"
            >
              Request Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-techealth-green focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg mt-2 shadow-lg">
              {navLinks.map((link) => {
                if (link.path) {
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-techealth-green hover:bg-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  );
                } else {
                  return (
                    <button
                      key={link.name}
                      onClick={link.action}
                      className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-techealth-green hover:bg-gray-50"
                    >
                      {link.name}
                    </button>
                  );
                }
              })}
              <div className="pt-2">
                <Button 
                  onClick={() => {
                    handleScrollTo("request-demo");
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-techealth-blue hover:bg-techealth-darkblue"
                >
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
