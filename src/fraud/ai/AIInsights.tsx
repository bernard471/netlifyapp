import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Brain, AlertCircle } from 'lucide-react';

const data = [
  { date: '2024-01', anomalyScore: 65, threshold: 75 },
  { date: '2024-02', anomalyScore: 72, threshold: 75 },
  { date: '2024-03', anomalyScore: 88, threshold: 75 },
  { date: '2024-04', anomalyScore: 95, threshold: 75 },
  { date: '2024-05', anomalyScore: 82, threshold: 75 },
  { date: '2024-06', anomalyScore: 78, threshold: 75 },
];

const AIInsights = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">AI Risk Analysis</h2>
          <p className="text-gray-600">Anomaly detection and risk scoring</p>
        </div>
        <div className="flex items-center space-x-2">
          <Brain className="w-5 h-5 text-[#1a4d2e]" />
          <span className="text-sm text-gray-600">Model: FraudDetect v2.1</span>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="anomalyScore" 
              stroke="#1a4d2e" 
              strokeWidth={2}
              name="Anomaly Score"
            />
            <Line 
              type="monotone" 
              dataKey="threshold" 
              stroke="#ef4444" 
              strokeDasharray="5 5"
              name="Risk Threshold"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-100">
        <div className="flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-red-900">High Risk Alert</h3>
            <p className="text-sm text-red-700">
              Anomaly scores exceeded threshold in March-April. Investigation recommended.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInsights;