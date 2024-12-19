
import { AlertTriangle, ArrowRight, Clock } from 'lucide-react';

const cases = [
  {
    id: 1,
    title: 'Suspicious Transaction Pattern',
    department: 'Finance',
    riskLevel: 'High',
    timestamp: '2 hours ago',
    amount: '₵125,000'
  },
  {
    id: 2,
    title: 'Document Forgery Detected',
    department: 'Procurement',
    riskLevel: 'Medium',
    timestamp: '5 hours ago',
    amount: '₵45,000'
  },
  {
    id: 3,
    title: 'Multiple Failed Auth Attempts',
    department: 'IT',
    riskLevel: 'Low',
    timestamp: '1 day ago',
    amount: 'N/A'
  },
  {
    id: 4,
    title: 'Irregular Payment Pattern',
    department: 'Finance',
    riskLevel: 'High',
    timestamp: '2 days ago',
    amount: '₵89,000'
  }
];

const FraudCaseList = () => {
  return (
    <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Recent Alerts</h2>
        <button className="text-[#1a4d2e] text-sm font-medium flex items-center space-x-1">
          <span>View All</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-4">
        {cases.map((case_) => (
          <div
            key={case_.id}
            className="p-4 bg-gray-300 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className={`w-4 h-4 ${
                    case_.riskLevel === 'High' ? 'text-red-500' :
                    case_.riskLevel === 'Medium' ? 'text-yellow-500' :
                    'text-blue-500'
                  }`} />
                  <h3 className="font-medium text-gray-900">{case_.title}</h3>
                </div>
                <div className="mt-1 text-sm text-gray-600">
                  {case_.department} • {case_.amount}
                </div>
                <div className="mt-2 flex items-center text-xs text-gray-500">
                  <Clock className="w-3 h-3 mr-1" />
                  {case_.timestamp}
                </div>
              </div>
              <span className={`px-2 py-1 rounded text-xs font-medium ${
                case_.riskLevel === 'High' ? 'bg-red-100 text-red-800' :
                case_.riskLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-blue-100 text-blue-800'
              }`}>
                {case_.riskLevel}
              </span>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 px-4 py-2 bg-[#023047] text-white rounded-lg hover:bg-[#2d694d] transition-colors flex items-center justify-center space-x-2">
        <AlertTriangle className="w-4 h-4" />
        <span>Generate Alert Report</span>
      </button>
    </div>
  );
};

export default FraudCaseList;