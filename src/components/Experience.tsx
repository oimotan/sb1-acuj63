import React from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface ExperienceProps {
  experience: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section id="experience" className="scroll-mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
      <div className="space-y-8">
        {experience.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:scale-[1.02]"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.company}</p>
              </div>
              <p className="text-gray-500 mt-2 md:mt-0">{item.period}</p>
            </div>
            <p className="text-gray-700 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;