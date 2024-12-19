
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { ArrowUpRight } from 'lucide-react';

const data = [
  { name: 'Financial', value: 45 },
  { name: 'Document', value: 25 },
  { name: 'Identity', value: 20 },
  { name: 'Other', value: 10 },
];

const COLORS = ['#023047', '#219EBC', '#8ECAE6', '#ade8f4'];

const FraudMetrics = () => {
  return (
    <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Fraud Categories</h2>
        <button className="text-[#1a4d2e] text-sm font-medium flex items-center space-x-1">
          <span>View Details</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        {data.map((category, index) => (
          <div key={category.name} className="p-3 bg-gray-300 rounded-lg">
            <div className="flex items-center space-x-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: COLORS[index] }}
              />
              <span className="text-sm font-medium text-gray-900">
                {category.name}
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-1">
              {category.value}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FraudMetrics;