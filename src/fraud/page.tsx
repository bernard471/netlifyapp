import React from 'react';
import { AlertTriangle, Shield, Brain } from 'lucide-react';
import FraudMetrics from './metrics/FraudMetrics';
import AIInsights from './ai/AIInsights';
import FraudCaseList from './cases/FraudCaseList';
import RiskMap from './visualization/RiskMap';

const FraudDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-200 py-8">
      <div className="container mx-auto px-4">
        {/* Dashboard Header */}
        <div className="mb-8 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900">Fraud Detection Center</h1>
        <p className="text-gray-600 md:text-xl">AI-powered fraud detection and risk analysis</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <QuickStat
            icon={<AlertTriangle className="w-6 h-6" />}
            title="Fraud Alerts"
            value="47"
            trend="+12"
            trendUp={false}
            description="Last 30 days"
          />
          <QuickStat
            icon={<Shield className="w-6 h-6" />}
            title="Prevented Loss"
            value="₵12.8M"
            trend="+₵2.3M"
            trendUp={true}
            description="This quarter"
          />
          <QuickStat
            icon={<Brain className="w-6 h-6" />}
            title="AI Accuracy"
            value="97.8%"
            trend="+2.1%"
            trendUp={true}
            description="Model performance"
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* AI Insights */}
          <div className="lg:col-span-8">
            <AIInsights />
          </div>

          {/* Fraud Metrics */}
          <div className="lg:col-span-4">
            <FraudMetrics />
          </div>

          {/* Risk Map */}
          <div className="lg:col-span-8">
            <RiskMap />
          </div>

          {/* Recent Cases */}
          <div className="lg:col-span-4">
            <FraudCaseList />
          </div>
        </div>
      </div>
    </div>
  );
};

interface QuickStatProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  trend: string;
  trendUp: boolean;
  description: string;
}

const QuickStat = ({ icon, title, value, trend, trendUp, description }: QuickStatProps) => (
  <div className="bg-gray-500/30 rounded-xl p-6 shadow-sm">
    <div className="flex items-center justify-between mb-4">
      <div className="p-2 bg-[#1a4d2e]/10 rounded-lg">
        <div className="text-white">{icon}</div>
      </div>
      <span className={`text-sm ${trendUp ? 'text-green-700' : 'text-red-600'}`}>
        {trend}
      </span>
    </div>
    <h3 className="text-gray-900 text-sm mb-1">{title}</h3>
    <div className="flex items-center justify-between ">
    <p className="text-2xl font-bold text-gray-900">{value}</p>
    <p className="text-sm text-gray-900 mt-1">{description}</p>
    </div>
  </div>
);

export default FraudDashboard;