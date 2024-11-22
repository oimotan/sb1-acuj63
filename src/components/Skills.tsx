import React from 'react';

interface SkillsProps {
  skills: {
    frontend: string[];
    backend: string[];
    tools: string[];
    other: string[];
  };
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const renderSkillCategory = (title: string, items: string[]) => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="scroll-mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {renderSkillCategory('Frontend', skills.frontend)}
        {renderSkillCategory('Backend', skills.backend)}
        {renderSkillCategory('Tools', skills.tools)}
        {renderSkillCategory('Other', skills.other)}
      </div>
    </section>
  );
};

export default Skills;