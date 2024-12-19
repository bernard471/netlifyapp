import React from 'react';
import { 
  TrendingUp, AlertCircle, CheckCircle2, 
  Clock, Building, Users 
} from 'lucide-react';

const StatisticsGrid = () => {
  return (
    <section className="py-12 bg-[#e8f4fa]"> {/* Prussian blue background */}
      <div className="container mx-auto px-4">
         <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-[#023047] mb-4">
          Empowering Digital Oversight
        </h2>
        <p className="text-[#045b88] max-w-2xl mx-auto">
          Leading the transformation in public sector monitoring with advanced analytics, 
          real-time tracking, and intelligent fraud detection systems that set new 
          standards for government accountability.
        </p>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard
            icon={<TrendingUp className="w-6 h-6" />}
            title="Active Investigations"
            value="324"
            trend="+12% this month"
            trendUp={true}
          />
          <StatCard
            icon={<AlertCircle className="w-6 h-6" />}
            title="Reports Submitted"
            value="1,432"
            trend="+8% this month"
            trendUp={true}
          />
          <StatCard
            icon={<CheckCircle2 className="w-6 h-6" />}
            title="Cases Resolved"
            value="892"
            trend="95% success rate"
            trendUp={true}
          />
          <StatCard
            icon={<Clock className="w-6 h-6" />}
            title="Average Resolution Time"
            value="14 days"
            trend="-2 days from last month"
            trendUp={true}
          />
          <StatCard
            icon={<Building className="w-6 h-6" />}
            title="Agencies Monitored"
            value="156"
            trend="All major departments"
            trendUp={true}
          />
          <StatCard
            icon={<Users className="w-6 h-6" />}
            title="Whistleblowers Protected"
            value="438"
            trend="100% anonymity maintained"
            trendUp={true}
          />
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ 
  icon, 
  title, 
  value, 
  trend, 
  trendUp 
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  trend: string;
  trendUp: boolean;
}) => (
  <div className="bg-[#8ecae6]/40 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="flex items-center justify-between mb-4">
      <div className="p-2 bg-[#219ebc] rounded-lg shadow-md">
        <div className="text-white">{icon}</div>
      </div>
      <span className={`text-sm font-medium ${trendUp ? 'text-emerald-600' : 'text-red-600'}`}>
        {trend}
      </span>
    </div>
    <h3 className="text-[#023047] text-sm font-medium mb-1">{title}</h3>
    <p className="text-2xl font-bold text-[#023047]">{value}</p>
  </div>
);

export default StatisticsGrid;
