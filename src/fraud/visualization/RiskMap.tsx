import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Download } from 'lucide-react';

const data = [
  { x: 64, y: 75, z: 100000, department: 'Finance', risk: 'Medium' },
  { x: 85, y: 92, z: 250000, department: 'Procurement', risk: 'High' },
  { x: 45, y: 53, z: 50000, department: 'HR', risk: 'Low' },
  { x: 72, y: 81, z: 150000, department: 'IT', risk: 'Medium' },
  { x: 91, y: 88, z: 300000, department: 'Operations', risk: 'High' },
  { x: 52, y: 48, z: 75000, department: 'Admin', risk: 'Low' },
];

const RiskMap = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Risk Distribution Map</h2>
          <p className="text-gray-600">Transaction volume vs. anomaly score</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-[#023047] text-white rounded-lg hover:bg-[#2d694d] transition-colors">
          <Download className="w-4 h-4" />
          <span>Export</span>
        </button>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              type="number" 
              dataKey="x" 
              name="Anomaly Score" 
              unit="%" 
            />
            <YAxis 
              type="number" 
              dataKey="y" 
              name="Risk Score" 
              unit="%" 
            />
            <Tooltip 
              cursor={{ strokeDasharray: '3 3' }}
              content={({ payload }) => {
                if (!payload || !payload.length) return null;
                const data = payload[0].payload;
                return (
                  <div className="bg-white p-3 shadow-lg rounded-lg border">
                    <p className="font-medium">{data.department}</p>
                    <p className="text-sm text-gray-600">Risk Level: {data.risk}</p>
                    <p className="text-sm text-gray-600">
                      Amount: ₵{(data.z).toLocaleString()}
                    </p>
                  </div>
                );
              }}
            />
            <Scatter 
              name="Departments" 
              data={data}
              fill="#1a4d2e"
            />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="p-3 bg-red-50 rounded-lg">
          <p className="text-sm font-medium text-red-900">High Risk</p>
          <p className="text-2xl font-bold text-red-700">2</p>
          <p className="text-xs text-red-600">Departments</p>
        </div>
        <div className="p-3 bg-yellow-50 rounded-lg">
          <p className="text-sm font-medium text-yellow-900">Medium Risk</p>
          <p className="text-2xl font-bold text-yellow-700">2</p>
          <p className="text-xs text-yellow-600">Departments</p>
        </div>
        <div className="p-3 bg-green-50 rounded-lg">
          <p className="text-sm font-medium text-green-900">Low Risk</p>
          <p className="text-2xl font-bold text-green-700">2</p>
          <p className="text-xs text-green-600">Departments</p>
        </div>
      </div>
    </div>
  );
};

export default RiskMap;