"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDivisionsOpen, setIsDivisionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDivisionsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const divisions = [
    { name: 'Binding', path: '/divisions/binding' },
    { name: 'Chairman Office', path: '/divisions/chairman-office' },
    { name: 'Finance', path: '/divisions/finance' },
    { name: 'GM Office', path: '/divisions/gm-office' },
    { name: 'HR & Admin', path: '/divisions/hrd-admin' },
    { name: 'Internal Audit', path: '/divisions/internal-audit' },
    { name: 'IT', path: '/divisions/it' },
    { name: 'Litho Section', path: '/divisions/litho-section' },
    { name: 'Main Store', path: '/divisions/main-store' },
    { name: 'Maintenance', path: '/divisions/maintenance' },
    { name: 'Marketing', path: '/divisions/marketing' },
    { name: 'Process Section', path: '/divisions/process-section' },
    { name: 'Security', path: '/divisions/security' },
    { name: 'Security Printing', path: '/divisions/security-printing' },
    { name: 'Stationery Factory', path: '/divisions/stationery-factory' },
    { name: 'Stationery Store', path: '/divisions/stationery-store' },
    { name: 'Supplies', path: '/divisions/supplies' },
  ];

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { 
      name: 'DIVISIONS', 
      href: '/divisions',
      hasDropdown: true 
    },
    { name: 'SERVICES', href: '/services' },
    { name: 'NEWS & MEDIA', href: '/news' },
    { name: 'DOWNLOADS', href: '/downloads' },
    { name: 'CAREERS', href: '/careers' },
    { name: 'CONTACT', href: '/contact' },
  ];

  const toggleDivisions = (e: React.MouseEvent) => {
    e.preventDefault();
    const newState = !isDivisionsOpen;
    setIsDivisionsOpen(newState);
    
    // If opening the dropdown, scroll to top
    if (newState) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <header 
      ref={dropdownRef}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isDivisionsOpen 
          ? 'bg-gray-900' // When dropdown is open
          : isScrolled 
            ? 'bg-gray-900 shadow-lg' // When scrolled
            : 'bg-transparent' // Initial state (transparent)
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-bold text-white z-50"
            onClick={() => setIsDivisionsOpen(false)}
          >
            <span className="text-white">SPC</span>
            <span className="text-amber-500">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.href} className="relative">
                {link.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={toggleDivisions}
                      className={`flex items-center px-3 py-2 text-sm uppercase tracking-wider transition-colors ${
                        isDivisionsOpen || pathname.startsWith(link.href)
                          ? 'text-amber-400 font-medium'
                          : 'text-gray-200 hover:text-amber-400'
                      }`}
                    >
                      {link.name}
                      {isDivisionsOpen ? (
                        <FaChevronUp className="ml-1 h-3 w-3" />
                      ) : (
                        <FaChevronDown className="ml-1 h-3 w-3" />
                      )}
                    </button>
                    
                    {/* Dropdown Menu */}
                    {isDivisionsOpen && (
                      <div className="fixed inset-0 top-20 bg-gray-900 z-[9999] overflow-y-auto">
                        <div className="container mx-auto py-8 px-4 relative z-[10000]">
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {divisions.map((division) => (
                              <Link
                                key={division.path}
                                href={division.path}
                                className={`block p-6 rounded-lg transition-all hover:bg-amber-600/20 hover:scale-[1.02] ${
                                  pathname === division.path 
                                    ? 'bg-amber-600/30 ring-2 ring-amber-400' 
                                    : 'bg-gray-800/50 hover:bg-gray-800/70'
                                }`}
                                onClick={() => setIsDivisionsOpen(false)}
                              >
                                <h3 className="text-lg font-medium text-white">{division.name}</h3>
                              </Link>
                            ))}
                          </div>
                          <button 
                            onClick={() => setIsDivisionsOpen(false)}
                            className="fixed top-24 right-8 text-gray-400 hover:text-white transition-colors"
                            aria-label="Close menu"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`px-3 py-2 text-sm uppercase tracking-wider transition-colors ${
                      pathname === link.href || pathname.startsWith(`${link.href}/`)
                        ? 'text-amber-400 font-medium'
                        : 'text-gray-200 hover:text-amber-400'
                    }`}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsDivisionsOpen(false);
                    }}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden z-50">
            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                if (isMenuOpen) setIsDivisionsOpen(false);
              }}
              className="text-white hover:text-amber-400 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900">
          {navLinks.map((link) => (
            <div key={link.href}>
              {link.hasDropdown ? (
                <div className="space-y-1">
                  <button
                    onClick={() => setIsDivisionsOpen(!isDivisionsOpen)}
                    className="flex justify-between items-center w-full px-4 py-3 text-left text-base font-medium text-gray-200 hover:bg-gray-800 hover:text-amber-400 rounded-md"
                  >
                    <span>{link.name}</span>
                    {isDivisionsOpen ? (
                      <FaChevronUp className="h-4 w-4" />
                    ) : (
                      <FaChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  {isDivisionsOpen && (
                    <div className="pl-4 space-y-1">
                      {divisions.map((division) => (
                        <Link
                          key={division.path}
                          href={division.path}
                          className={`block px-4 py-3 text-sm text-gray-300 hover:bg-gray-800 hover:text-amber-400 rounded-md ${
                            pathname === division.path ? 'text-amber-400' : ''
                          }`}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsDivisionsOpen(false);
                          }}
                        >
                          {division.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={link.href}
                  className={`block px-4 py-3 text-base font-medium rounded-md ${
                    pathname === link.href || pathname.startsWith(`${link.href}/`)
                      ? 'bg-gray-800 text-amber-400'
                      : 'text-gray-200 hover:bg-gray-800 hover:text-amber-400'
                  }`}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsDivisionsOpen(false);
                  }}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
