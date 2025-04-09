
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/">
              <img
                src="/lovable-uploads/eae8e393-ede9-40a5-8356-2bd995264322.png"
                alt="Techealth Apex Logo"
                className="h-12 w-auto mb-4"
              />
            </Link>
            <p className="text-gray-300 mb-4">
              Revolutionizing India's commercial vehicle and logistics industry through AI-powered safety and fleet monitoring solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/techealth23/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.instagram.com/techealth_india?igsh=MTFha3M4cHJmeG84cQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors transform hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors transform hover:scale-110">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors transform hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors transform hover:scale-110">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-300 hover:text-white transition-colors">Features</Link>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo('recent-insights')}
                  className="text-gray-300 hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer"
                >
                  Insights
                </button>
              </li>
              <li>
                <Link to="/investors" className="text-gray-300 hover:text-white transition-colors">Investors</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-techealth-green shrink-0 mt-0.5" />
                <div className="text-gray-300">
                  <p className="font-semibold mb-1">Head Office:</p>
                  <p>N-247, Badarpur, New Delhi, Delhi - 110044</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-techealth-green shrink-0 mt-0.5" />
                <div className="text-gray-300">
                  <p className="font-semibold mb-1">Branch Office:</p>
                  <p>Plot C-184, Industrial Area, Phase VIIIA, Sector 75, Sahibzada Ajit Singh Nagar, Punjab 160071</p>
                </div>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-techealth-green" />
                <a href="tel:+919717365884" className="text-gray-300 hover:text-white transition-colors">
                  +91 9717365884
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-techealth-green" />
                <a href="tel:+916200922552" className="text-gray-300 hover:text-white transition-colors">
                  +91 6200922552
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-techealth-green" />
                <a href="mailto:info@techealth.in" className="text-gray-300 hover:text-white transition-colors">
                  info@techealth.in
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <p className="text-gray-300 mb-4">
              Ready to revolutionize your fleet management? Contact us or request a demo today.
            </p>
            <Button
              onClick={() => handleScrollTo('request-demo')}
              className="w-full bg-techealth-green hover:bg-techealth-darkgreen mb-3"
            >
              Request a Demo
            </Button>
            <Link to="/contact">
              <Button variant="outline" className="w-full border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Techealth Apex Private Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
