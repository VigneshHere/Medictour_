import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoIcon from '@/assets/logo_icon.png';
import logoText from '@/assets/logo_text.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Treatments', href: '/treatments' },
    { label: 'For Africa', href: '/africa' },
    { label: 'For Gulf', href: '/gulf' },
    { label: 'Process', href: '/process' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-green-800/65' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-end space-x-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="flex items-center justify-center">
              <img 
                src={logoIcon}
                alt="Medictour"
                className="h-12 w-12 rounded-lg object-cover"
              />
            </div>
            <div className="flex items-center pb-1">
              <img 
                src={logoText}
                alt="Medictour"
                className="h-12 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`transition-all duration-300 font-medium px-3 py-2 rounded-lg ${
                  isActive(item.href) 
                    ? isScrolled 
                      ? 'bg-green-600 text-white font-semibold shadow-md' // Green active state when scrolled
                      : 'bg-white/30 text-white font-semibold backdrop-blur-sm border border-white/40' // Visible on hero
                    : isScrolled 
                    ? 'text-white hover:bg-green-700 hover:text-white' // White text with green hover
                    : 'text-white hover:bg-white/20 hover:text-white' // Consistent white text
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact">
              <Button className={`${
                isScrolled 
                  ? 'bg-white text-green-800 hover:bg-green-100 hover:text-green-900 shadow-md' 
                  : 'bg-white text-green-800 hover:bg-green-100 shadow-md'
              }`}>
                Free Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${
              isScrolled ? 'text-white' : 'text-white' // Consistent white color
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden py-4 ${
            isScrolled 
              ? 'bg-green-800/95 backdrop-blur-sm border-t border-green-700' 
              : 'bg-green-800/95 backdrop-blur-sm'
          }`}>
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`block px-4 py-3 transition-colors border-b ${
                  isActive(item.href) 
                    ? 'bg-green-600 text-white font-semibold border-green-500 shadow-sm'
                    : 'text-white hover:bg-green-700 border-green-700'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 pt-4">
              <Link 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button className="w-full bg-white text-green-800 hover:bg-green-100 hover:text-green-900 shadow-md">
                  Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;