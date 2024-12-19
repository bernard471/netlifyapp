import React from 'react';

interface StatItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
}

const StatItem = ({ icon, title, value, description }: StatItemProps) => (
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

export default StatItem;