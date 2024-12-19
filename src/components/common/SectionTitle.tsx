import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
}

export const SectionTitle = ({ 
  title, 
  subtitle, 
  alignment = 'center' 
}: SectionTitleProps) => {
  return (
    <div className={`max-w-3xl ${alignment === 'center' ? 'mx-auto text-center' : ''} mb-12`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
      {subtitle && (
        <p className="text-gray-600 text-lg">{subtitle}</p>
      )}
    </div>
  );
};