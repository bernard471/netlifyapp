import React from 'react';
import { 
  FileText, BookOpen, FileQuestion, 
  FileSearch, Download, ExternalLink 
} from 'lucide-react';

const ResourceGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ResourceCard
            icon={<FileText className="w-6 h-6" />}
            title="Guidelines & Procedures"
            description="Official documentation on reporting procedures and investigation protocols."
            links={[
              { text: "Reporting Guidelines", url: "#" },
              { text: "Investigation Process", url: "#" },
              { text: "Standard Forms", url: "#" }
            ]}
          />
          <ResourceCard
            icon={<BookOpen className="w-6 h-6" />}
            title="Research & Publications"
            description="Academic papers and research on government transparency and accountability."
            links={[
              { text: "Latest Research", url: "#" },
              { text: "Annual Reports", url: "#" },
              { text: "Impact Studies", url: "#" }
            ]}
          />
          <ResourceCard
            icon={<FileQuestion className="w-6 h-6" />}
            title="FAQs"
            description="Commonly asked questions about our platform and services."
            links={[
              { text: "General FAQs", url: "#" },
              { text: "Technical Support", url: "#" },
              { text: "Legal Information", url: "#" }
            ]}
          />
          <ResourceCard
            icon={<FileSearch className="w-6 h-6" />}
            title="Case Studies"
            description="Real-world examples of successful investigations and resolutions."
            links={[
              { text: "Success Stories", url: "#" },
              { text: "Case Archives", url: "#" },
              { text: "Learning Materials", url: "#" }
            ]}
          />
          <ResourceCard
            icon={<Download className="w-6 h-6" />}
            title="Downloads"
            description="Essential forms, templates, and tools for reporting and documentation."
            links={[
              { text: "Report Templates", url: "#" },
              { text: "Official Forms", url: "#" },
              { text: "User Guides", url: "#" }
            ]}
          />
          <ResourceCard
            icon={<ExternalLink className="w-6 h-6" />}
            title="External Resources"
            description="Links to partner organizations and related government services."
            links={[
              { text: "Partner Agencies", url: "#" },
              { text: "Government Links", url: "#" },
              { text: "International Bodies", url: "#" }
            ]}
          />
        </div>
      </div>
    </section>
  );
};

interface ResourceLink {
  text: string;
  url: string;
}

const ResourceCard = ({ 
  icon, 
  title, 
  description, 
  links 
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  links: ResourceLink[];
}) => (
  <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
    <div className="w-12 h-12 bg-[#1a4d2e] text-white rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <a 
            href={link.url}
            className="text-[#1a4d2e] hover:text-[#2d694d] flex items-center space-x-2"
          >
            <span>→</span>
            <span>{link.text}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default ResourceGrid;