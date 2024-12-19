import React from 'react';
import { Shield, AlertTriangle, BarChart3 } from 'lucide-react';
import Hero1 from '../images/hero1.jpg';
import Hero4 from '../images/hero4.jpg';
import { useState } from 'react';
import { useEffect } from 'react';

const backgroundImages = [
  Hero1,
  Hero4,
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-[#023047] to-[#219ebc] text-white">
              <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{ 
            backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
          }}
        />
       <div className="absolute inset-0 bg-zinc-950/90" />
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            Ensuring Transparency in Government Operations
          </h1>
          <p className="text-xl mb-8 text-[#8ecae6]">
            Advanced monitoring and reporting platform for tracking government assets,
            detecting fraud, and promoting accountability in public service.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#ffb703] text-[#023047] px-6 py-3 rounded-lg font-medium hover:bg-[#fb8500] transition-colors">
              Report an Issue
            </button>
            <button className="bg-[#023047]  border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-[#045b88] transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white/10 backdrop-blur-sm py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Stat
              icon={<Shield className="w-8 h-8" />}
              title="Asset Protection"
              value="₵2.5B+"
              description="Government assets protected"
            />
            <Stat
              icon={<AlertTriangle className="w-8 h-8" />}
              title="Fraud Prevention"
              value="1,234+"
              description="Cases investigated"
            />
            <Stat
              icon={<BarChart3 className="w-8 h-8" />}
              title="Recovery Rate"
              value="95%"
              description="Successful recoveries"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Stat = ({ icon, title, value, description }: {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
}) => (
  <div className="flex items-start space-x-4">
    <div className="p-3 bg-white/20 rounded-lg">
      {icon}
    </div>
    <div>
      <h3 className="font-medium text-lg">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-sm text-green-200">{description}</p>
    </div>
  </div>
);

export default Hero;