
import { Clock, CheckCircle2, AlertTriangle, MoreVertical } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'Road Infrastructure Development',
    budget: '₵2.5M',
    progress: 75,
    status: 'on-track',
    dueDate: '2024-06-30',
  },
  {
    id: 2,
    name: 'Healthcare Facility Expansion',
    budget: '₵1.8M',
    progress: 45,
    status: 'at-risk',
    dueDate: '2024-08-15',
  },
  {
    id: 3,
    name: 'Educational Resources Program',
    budget: '₵900K',
    progress: 90,
    status: 'on-track',
    dueDate: '2024-05-20',
  },
  // Add more projects as needed
];

const ProjectGrid = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Active Projects</h2>
            <p className="text-gray-600">Track progress and status of ongoing projects</p>
          </div>
          <button className="px-4 py-2 bg-[#023047] text-white rounded-lg hover:bg-[#023047]/90 transition-colors">
            Add Project
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Project Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Budget
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Progress
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Due Date
              </th>
              <th className="px-6 py-3 text-right"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {projects.map((project) => (
              <tr key={project.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{project.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{project.budget}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-[#fb8500] h-2.5 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 mt-1">{project.progress}%</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={project.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{project.dueDate}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const StatusBadge = ({ status }: { status: string }) => {
  const styles = {
    'on-track': {
      bg: 'bg-green-100',
      text: 'text-green-800',
      icon: <CheckCircle2 className="w-4 h-4 text-green-600" />,
      label: 'On Track',
    },
    'at-risk': {
      bg: 'bg-red-100',
      text: 'text-red-800',
      icon: <AlertTriangle className="w-4 h-4 text-red-600" />,
      label: 'At Risk',
    },
    'delayed': {
      bg: 'bg-yellow-100',
      text: 'text-yellow-800',
      icon: <Clock className="w-4 h-4 text-yellow-600" />,
      label: 'Delayed',
    },
  }[status] || {
    bg: 'bg-gray-100',
    text: 'text-gray-800',
    icon: null,
    label: 'Unknown',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles.bg} ${styles.text}`}>
      {styles.icon}
      <span className="ml-1">{styles.label}</span>
    </span>
  );
};
export default ProjectGrid;