import React from 'react';
import { 
  Search, Shield, Network, Brain, 
  FileSearch, UserCheck, Lock, BarChart 
} from 'lucide-react';

const Features = () => {
  return (
    <section className="py-20 bg-[#e8f4fa]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold  text-[#023047] mb-4">
            Comprehensive Monitoring Solutions
          </h2>
          <p className="text-[#045b88] max-w-2xl mx-auto">
            Our platform provides cutting-edge tools and features to ensure
            transparency and accountability in government operations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Search className="w-6 h-6" />}
            title="Asset Tracking"
            description="Real-time monitoring of government assets and resources"
          />
          <FeatureCard
            icon={<Shield className="w-6 h-6" />}
            title="Fraud Detection"
            description="Advanced algorithms to identify suspicious patterns"
          />
          <FeatureCard
            icon={<Network className="w-6 h-6" />}
            title="Network Mapping"
            description="Visualize connections between entities and transactions"
          />
          <FeatureCard
            icon={<Brain className="w-6 h-6" />}
            title="AI-Powered Auditing"
            description="Automated auditing powered by machine learning"
          />
          <FeatureCard
            icon={<FileSearch className="w-6 h-6" />}
            title="Case Management"
            description="Comprehensive tools for managing investigations"
          />
          <FeatureCard
            icon={<UserCheck className="w-6 h-6" />}
            title="Whistleblower Protection"
            description="Secure channels for confidential reporting"
          />
          <FeatureCard
            icon={<Lock className="w-6 h-6" />}
            title="Secure Platform"
            description="Enterprise-grade security for sensitive data"
          />
          <FeatureCard
            icon={<BarChart className="w-6 h-6" />}
            title="Analytics Dashboard"
            description="Real-time insights and reporting capabilities"
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#8ecae6]/20 "> 
    <div className="w-12 h-12 bg-[#023047] text-white rounded-lg flex items-center justify-center mb-4 ml-32 lg:ml-24 shadow-md">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">{title}</h3>
    <p className="text-[#045b88] text-center">{description}</p>
  </div>
);

export default Features;