import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Download } from 'lucide-react';

const data = [
  { month: 'Jan', budget: 4000, spent: 3200 },
  { month: 'Feb', budget: 3500, spent: 3100 },
  { month: 'Mar', budget: 4200, spent: 3800 },
  { month: 'Apr', budget: 3800, spent: 3100 },
  { month: 'May', budget: 4100, spent: 3600 },
  { month: 'Jun', budget: 3900, spent: 3200 },
];

const FinanceOverview = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Financial Overview</h2>
          <p className="text-gray-600">Budget vs. Actual Spending</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-[#023047] text-white rounded-lg hover:bg-[#2d694d] transition-colors">
          <Download className="w-4 h-4" />
          <span>Export</span>
        </button>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="budget" name="Budget" fill="#219ebc" />
            <Bar dataKey="spent" name="Spent" fill="#023047" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-600 mb-1">Total Budget</p>
          <p className="text-2xl font-bold text-gray-900">₵23.5M</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-600 mb-1">Total Spent</p>
          <p className="text-2xl font-bold text-gray-900">₵20.0M</p>
        </div>
      </div>
    </div>
  );
};

export default FinanceOverview;