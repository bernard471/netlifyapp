import React from 'react';
import { Target, Award, Users } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';

const Mission = () => {
  return (
    <section className="py-16 bg-[#8ecae6]/40"> {/* Prussian blue background */}
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Mission & Vision"
          subtitle="Dedicated to promoting transparency and accountability in Ghana's public sector"
        />
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <MissionCard
            icon={<Target className="w-8 h-8" />}
            title="Our Mission"
            description="To establish a robust monitoring system that ensures transparency and accountability in government operations through innovative technology solutions."
          />
          <MissionCard
            icon={<Award className="w-8 h-8" />}
            title="Our Vision"
            description="To become Ghana's leading platform for public sector oversight, creating a corruption-free environment that promotes national development."
          />
          <MissionCard
            icon={<Users className="w-8 h-8" />}
            title="Our Values"
            description="Integrity, Innovation, Accountability, Collaboration, and Excellence in all our operations and services."
          />
        </div>
      </div>
    </section>
  );
};

const MissionCard = ({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="p-6 bg-[#023047]/40 rounded-xl hover:bg-[#023047]/30 hover:text-white transition-colors duration-300 shadow-lg"> {/* Sky blue with hover state */}
    <div className="w-16 h-16 bg-[#fb8500] text-white rounded-full flex items-center justify-center mb-4 ml-32 lg:ml-36 mb-4 shadow-md"> {/* UT orange for icon background */}
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-black text-center mb-3">{title}</h3> {/* Prussian blue text */}
    <p className="text-black/80 text-center leading-relaxed">{description}</p> {/* Prussian blue text with opacity */}
  </div>
);

export default Mission;
