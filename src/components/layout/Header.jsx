import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ navigateTo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", page: "services" },
    { name: "Portfolio", page: "portfolio" },
    { name: "Get Started", page: "get-started" },
    { name: "Contact", page: "contact" },
  ];

  const handleNavClick = (page) => {
    navigateTo(page);
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            {/* FIX: Changed <a> to <button> for accessibility */}
            <button onClick={() => handleNavClick('home')} className="logo-link text-2xl font-bold text-blue-600">LaunchSites</button>
          </div>
          <div className="hidden md:block">
            <nav className="ml-10 flex items-baseline space-x-4">
              {navLinks.map(link => (
                // FIX: Changed <a> to <button> and added the 'nav-button' class
                // The 'nav-button' class you added to your CSS will make it look like a link
                <button key={link.name} className="nav-button" onClick={() => handleNavClick(link.page)}>
                  {link.name}
                </button>
              ))}
            </nav>
          </div>
          <div className="hidden md:block">
            {/* FIX: Changed <a> to <button> for accessibility */}
            <button onClick={() => handleNavClick('contact')} className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
              Book a Demo
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white">
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => (
              // FIX: Changed <a> to <button> for the mobile menu
              <button key={link.name} onClick={() => handleNavClick(link.page)} className="text-gray-600 hover:bg-blue-500 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors">
                {link.name}
              </button>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              {/* FIX: Changed <a> to <button> for the mobile menu */}
              <button onClick={() => handleNavClick('contact')} className="w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;