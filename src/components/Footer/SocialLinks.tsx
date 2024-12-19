
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Youtube className="w-5 h-5" />, href: '#', label: 'YouTube' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map(({ icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="text-gray-400 hover:text-white transition-colors"
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;