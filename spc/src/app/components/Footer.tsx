"use client";

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Divisions', href: '/divisions' },
    { name: 'Careers', href: '/careers' },
    { name: 'News & Media', href: '/news' },
  ];

  const serviceLinks = [
    { name: 'Our Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Industries', href: '/industries' },
  ];

  const contactInfo = [
    { text: 'Panaluwa, Watareka,Padukka, Sri Lanka' },
    { text: 'Email: chairman@spclanka.gov.lk' },
    { text: 'Phone: +94 11 2581835' },
  ];

  const socialLinks = [
    { icon: <FaFacebook size={20} />, href: 'https://www.facebook.com/share/16paVqWGaN/' },
    { icon: <FaTiktok size={20} />, href: 'https://www.tiktok.com/@stateprintingcorporation?lang=en' },
    { icon: <FaLinkedin size={20} />, href: 'https://www.linkedin.com/in/state-printing-corporation-sri-lanka' },
    { icon: <FaYoutube size={20} />, href: 'https://www.youtube.com/@StatePrintingCorporation_Lk' },
    { icon: <FaInstagram size={20} />, href: 'https://www.instagram.com/state_printing_corporation/' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-orange-500">SPC</span>
            </h3>
            <p className="text-gray-400 mb-4 text-justify">
              Delivering high-quality, secure, and cost-effective printing solutions to government and private institutions across Sri Lanka.
            </p>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                  aria-label={social.href.split('//')[1].split('.')[0]}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Our Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Contact Us</h4>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="text-gray-400 flex items-start text-justify">
                  {item.text}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md transition-colors">
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-500 text-sm text-center text-justify">
            &copy; {currentYear} SPC. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
