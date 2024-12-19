
import { FileText, Download } from 'lucide-react';

const reports = [
  {
    id: 1,
    title: 'Q1 2024 Progress Report',
    date: '2024-03-31',
    type: 'Quarterly Report',
    size: '2.4 MB',
  },
  {
    id: 2,
    title: 'March Financial Summary',
    date: '2024-03-30',
    type: 'Financial Report',
    size: '1.8 MB',
  },
  {
    id: 3,
    title: 'Project Status Update',
    date: '2024-03-28',
    type: 'Status Report',
    size: '956 KB',
  },
  {
    id: 4,
    title: 'Risk Assessment Report',
    date: '2024-03-25',
    type: 'Risk Report',
    size: '1.2 MB',
  },
];

const ProgressReports = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Progress Reports</h2>
        <button className="text-[#1a4d2e] hover:text-[#2d694d] text-sm font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {reports.map((report) => (
          <div
            key={report.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-[#1a4d2e]/10 rounded-lg">
                <FileText className="w-5 h-5 text-[#1a4d2e]" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">{report.title}</h3>
                <p className="text-xs text-gray-500">{report.type} • {report.size}</p>
                <p className="text-xs text-gray-500">{report.date}</p>
              </div>
            </div>
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <Download className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 px-4 py-2 bg-[#023047] text-white rounded-lg hover:bg-[#2d694d] transition-colors flex items-center justify-center space-x-2">
        <FileText className="w-4 h-4" />
        <span>Generate New Report</span>
      </button>
    </div>
  );
};

export default ProgressReports;