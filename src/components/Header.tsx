import { useState } from 'react';
import { Menu, Search, Globe, User, ChevronDown, X } from 'lucide-react';
import Logo from '../images/Coat_of_arms_of_Ghana.svg.png';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onLoginClick: () => void;
}



const Header: React.FC<HeaderProps> = ({ onLoginClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);


  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="bg-[#023047] text-white relative z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-2 border-b border-white/10">
          <div className="flex items-center space-x-4">
            <Globe className="w-4 h-4" />
            <span className="text-sm">EN</span>
          </div>
          <div className=" lg:flex items-center space-x-6">
            <a href="#" className="text-sm hover:text-green-200">Help</a>
            <a href="#" className="text-sm hover:text-green-200">Contact</a>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="w-10 h-10" />
            <div className="leading-tight">
              <h1 className="text-xl font-bold">GHGovPrivateEye</h1>
              <p className="text-xs text-green-200">Transparency & Accountability</p>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink href="#" text="Home" />
            <Dropdown
              label="About Us"
              items={[
                { href: '#', text: 'Mission & Vision' },
                { href: '#', text: 'Team & Leadership' },
                { href: '#', text: 'Partners & Collaborations' },
              ]}
            />
            <Dropdown
                label="Features"
                items={[
                  { href: '/AssetTracking', text: 'Asset Tracking' }, // Update this line
                  { href: '/fraud', text: 'Fraud Detection' },
                  { href: '#', text: 'Network Mapping' },
                  { href: '#', text: 'AI-Powered Auditing' },
                  { href: '#', text: 'Recovery Mechanisms' },
                ]}
              />

            <Dropdown
              label="Whistleblower Portal"
              items={[
                { href: 'https://ghanareport.netlify.app/', text: 'Submit a Report' },
                { href: 'https://ghanareport.netlify.app/', text: 'Track Your Report' },
                { href: '#', text: 'Guidelines & Confidentiality' },
              ]}
            />
            <Dropdown
              label="Resources"
              items={[
                { href: '#', text: 'Blog & Articles' },
                { href: '#', text: 'Research Papers' },
                { href: '#', text: 'Case Studies' },
                { href: '#', text: 'FAQs' },
              ]}
            />
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 hover:bg-[#2d694d] rounded-full">
              <Search className="w-5 h-5" />
            </button>
            <button 
              className="bg-[#fb8500] px-4 py-2 rounded-lg hover:bg-[#ffb703]"
              onClick={onLoginClick}
            >
              <User className="w-4 h-4 inline-block" />
              <span className="ml-2">Login</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-[#2d694d] rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="bg-[#023047] text-white lg:hidden space-y-4 py-4 px-4">
            <NavLink href="/" text="Home" />
            <MobileDropdown
              label="About Us"
              isOpen={openDropdown === 'about'}
              toggle={() => toggleDropdown('about')}
              items={[
                { href: '#', text: 'Mission & Vision' },
                { href: '#', text: 'Team & Leadership' },
                { href: '#', text: 'Partners & Collaborations' },
              ]}
            />
            <MobileDropdown
              label="Features"
              isOpen={openDropdown === 'features'}
              toggle={() => toggleDropdown('features')}
              items={[
                { href: '/AssetTracking', text: 'Asset Tracking' },
                { href: '/fraud', text: 'Fraud Detection' },
                { href: '#', text: 'Network Mapping' },
                { href: '#', text: 'AI-Powered Auditing' },
                { href: '#', text: 'Recovery Mechanisms' },
              ]}
            />
            <MobileDropdown
              label="Whistleblower Portal"
              isOpen={openDropdown === 'whistleblower'}
              toggle={() => toggleDropdown('whistleblower')}
              items={[
                { href: '#', text: 'Submit a Report' },
                { href: '#', text: 'Track Your Report' },
                { href: '#', text: 'Guidelines & Confidentiality' },
              ]}
            />
            <MobileDropdown
              label="Resources"
              isOpen={openDropdown === 'resources'}
              toggle={() => toggleDropdown('resources')}
              items={[
                { href: '#', text: 'Blog & Articles' },
                { href: '#', text: 'Research Papers' },
                { href: '#', text: 'Case Studies' },
                { href: '#', text: 'FAQs' },
              ]}
            />
            {/* Mobile Buttons */}
            <div className="flex flex-col space-y-4 mt-4">
              <button className="p-2 bg-[#2d694d] rounded-full flex justify-center items-center">
                <Search className="w-5 h-5 text-white" />
              </button>
              <button 
                className="bg-[#fb8500] px-4 py-2 rounded-lg hover:bg-[#ffb703]"
                onClick={onLoginClick}
              >
                <User className="w-4 h-4 inline-block" />
                <span className="ml-2">Login</span>
              </button>
            </div>
          </nav>
        )}
      </div>

    </header>
  );
};

const NavLink = ({ href, text }: { href: string; text: string }) => (
  <a href={href} className="block text-sm font-medium hover:text-green-200 lg:inline-block">
    {text}
  </a>
);

const Dropdown = ({ label, items }: { label: string; items: { href: string; text: string }[] }) => (
  <div className="relative group">
    <button className="flex items-center space-x-1 text-sm font-medium hover:text-[#8ecae6]">
      <span>{label}</span>
      <ChevronDown className="w-4 h-4" />
    </button>
    <div className="absolute top-full -left-5 hidden w-48 bg-[#023047] shadow-lg py-2 group-hover:block">
      {items.map((item, idx) => (
        <Link
          key={idx}
          to={item.href}
          className="block px-4 py-2 text-sm hover:bg-[#219ebc] hover:text-white"
        >
          {item.text}
        </Link>
      ))}
    </div>
  </div>
);

const MobileDropdown = ({
  label,
  isOpen,
  toggle,
  items,
}: {
  label: string;
  isOpen: boolean;
  toggle: () => void;
  items: { href: string; text: string }[];
}) => (
  <div>
    <button
      className="flex justify-between items-center w-full text-left text-sm font-medium"
      onClick={toggle}
    >
      <span>{label}</span>
      <ChevronDown className={`w-4 h-4 transform ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    {isOpen && (
      <div className="mt-2 space-y-2 pl-4">
        {items.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            className="block text-sm text-white hover:text-green-200"
          >
            {item.text}
          </a>
        ))}
      </div>
    )}
  </div>
);

export default Header;
