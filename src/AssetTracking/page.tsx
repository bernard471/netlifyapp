import React from 'react';
import FinanceOverview from './finance/FinanceOverview';
import ProjectGrid from './projects/ProjectGrid';
import ProgressReports from './reports/ProgressReports';
import { Wallet, TrendingUp, AlertCircle } from 'lucide-react';

const AssetDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-200 py-8">
      <div className="container mx-auto px-4">
        {/* Dashboard Header */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">Asset Tracking Dashboard</h1>
          <p className="text-gray-600 md:text-xl">Monitor finances, projects, and track progress in real-time</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <QuickStat
            icon={<Wallet className="w-6 h-6" />}
            title="Total Budget"
            value="₵25.6M"
            trend="+2.3%"
            trendUp={true}
          />
          <QuickStat
            icon={<TrendingUp className="w-6 h-6" />}
            title="Active Projects"
            value="48"
            trend="+5"
            trendUp={true}
          />
          <QuickStat
            icon={<AlertCircle className="w-6 h-6" />}
            title="At Risk Projects"
            value="3"
            trend="-2"
            trendUp={false}
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Finance Section */}
          <div className="lg:col-span-8">
            <FinanceOverview />
          </div>

          {/* Progress Reports */}
          <div className="lg:col-span-4">
            <ProgressReports />
          </div>

          {/* Projects Grid */}
          <div className="lg:col-span-12">
            <ProjectGrid />
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
}

const QuickStat = ({ icon, title, value, trend, trendUp }: QuickStatProps) => (
  <div className="bg-white rounded-xl p-6 shadow-sm">
    <div className="flex items-center justify-between mb-4">
      <div className="p-2 bg-[#1a4d2e]/10 rounded-lg">
        <div className="text-[#1a4d2e]">{icon}</div>
      </div>
      <span className={`text-sm ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
        {trend}
      </span>
    </div>
    <h3 className="text-gray-600 text-sm mb-1">{title}</h3>
    <p className="text-2xl font-bold text-gray-900">{value}</p>
  </div>
);

export default AssetDashboard;