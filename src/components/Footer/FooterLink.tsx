import React from 'react';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-white transition-colors block py-1"
    >
      {children}
    </a>
  );
};

export default FooterLink;