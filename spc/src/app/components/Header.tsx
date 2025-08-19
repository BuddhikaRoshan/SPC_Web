"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaChevronUp, FaTimes } from 'react-icons/fa';
import { divisions } from '@/data/divisions';

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDivisionsOpen, setIsDivisionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLBodyElement | null>(null);

  // Prevent body scroll when dropdown is open
  useEffect(() => {
    bodyRef.current = document.querySelector('body');
    if (isDivisionsOpen) {
      bodyRef.current?.classList.add('overflow-hidden');
    } else {
      bodyRef.current?.classList.remove('overflow-hidden');
    }
    return () => {
      bodyRef.current?.classList.remove('overflow-hidden');
    };
  }, [isDivisionsOpen]);

  // Close dropdown when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDivisionsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDivisionsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsDivisionsOpen(!isDivisionsOpen);
    setIsMenuOpen(false);
  };

  const closeDivisions = () => {
    setIsDivisionsOpen(false);
  };

  return (
    <>
      <header 
        ref={dropdownRef}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-gray-900/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        } ${isDivisionsOpen ? 'bg-gray-900' : ''}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="text-2xl font-bold text-white z-50"
              onClick={closeDivisions}
            >
              <span className="text-white">SPC</span>
              <span className="text-amber-500">.</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div key={link.href} className="relative">
                  {link.hasDropdown ? (
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
                  ) : (
                    <Link
                      href={link.href}
                      className={`px-3 py-2 text-sm uppercase tracking-wider transition-colors ${
                        pathname === link.href
                          ? 'text-amber-400 font-medium'
                          : 'text-gray-200 hover:text-amber-400'
                      }`}
                      onClick={closeDivisions}
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
                  if (isDivisionsOpen) setIsDivisionsOpen(false);
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
                  <div>
                    <button
                      onClick={() => {
                        setIsDivisionsOpen(!isDivisionsOpen);
                        setIsMenuOpen(false);
                      }}
                      className="flex justify-between items-center w-full px-4 py-3 text-left text-base font-medium text-gray-200 hover:bg-gray-800 hover:text-amber-400 rounded-md"
                    >
                      <span>{link.name}</span>
                      <FaChevronDown className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`block px-4 py-3 text-base font-medium rounded-md ${
                      pathname === link.href
                        ? 'bg-gray-800 text-amber-400'
                        : 'text-gray-200 hover:bg-gray-800 hover:text-amber-400'
                    }`}
                    onClick={() => {
                      setIsMenuOpen(false);
                      closeDivisions();
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

      {/* Full-page Divisions Dropdown */}
      <div 
        className={`fixed inset-0 bg-gray-900 z-40 transition-all duration-500 ease-in-out transform ${
          isDivisionsOpen 
            ? 'translate-y-0 opacity-100 visible' 
            : '-translate-y-full opacity-0 invisible'
        }`}
        style={{
          paddingTop: '5rem',
          paddingBottom: '2rem',
          overflowY: 'auto'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Divisions</h2>
            <button
              onClick={closeDivisions}
              className="text-gray-400 hover:text-white p-2"
              aria-label="Close divisions"
            >
              <FaTimes className="h-6 w-6" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {divisions.map((division) => (
              <Link
                key={division.id}
                href={`/divisions/${division.id}`}
                className="group relative bg-gray-800 rounded-lg p-6 hover:bg-amber-600 transition-all duration-300 overflow-hidden"
                onClick={closeDivisions}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-amber-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white">
                    {division.name}
                  </h3>
                  <p className="text-gray-300 group-hover:text-amber-100 text-sm">
                    {division.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
