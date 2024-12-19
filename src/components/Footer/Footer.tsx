import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

import Logo from '../../images/Coat_of_arms_of_Ghana.svg.png';
import FooterSection from './FooterSection';
import FooterLink from './FooterLink';
import SocialLinks from './SocialLinks';
import Newsletter from './Newsletter';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="w-10 h-10" />
              <div>
                <h2 className="text-xl font-bold text-white">GHGovPrivateEye</h2>
                <p className="text-sm text-gray-400">Transparency & Accountability</p>
              </div>
            </div>
            <p className="text-gray-400">
              Dedicated to promoting transparency and accountability in Ghana's public sector through innovative monitoring solutions.
            </p>
            <SocialLinks />
          </div>

          {/* Quick Links */}
          <FooterSection title="Quick Links">
            <div className="space-y-2">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/features">Our Features</FooterLink>
              <FooterLink href="/whistleblower">Report an Issue</FooterLink>
              <FooterLink href="/analytics">View Analytics</FooterLink>
              <FooterLink href="/resources">Resources</FooterLink>
            </div>
          </FooterSection>

          {/* Contact Information */}
          <FooterSection title="Contact Us">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#ffb703] mt-1" />
                <p>Ministry Row, Ministries<br />Accra, Ghana</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#ffb703]" />
                <p>+233 (0) 20 058 6604</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#ffb703]" />
                <p>info@ghgovprivateeye.gov.gh</p>
              </div>
            </div>
          </FooterSection>

          {/* Newsletter Section */}
          <Newsletter />
        </div>
      </div>

      {/* Sub Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} GHGovPrivateEye. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
              <FooterLink href="/accessibility">Accessibility</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;