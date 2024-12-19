import React from 'react';


interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
    <div className="w-12 h-12 bg-[#1a4d2e] text-white rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default FeatureCard;