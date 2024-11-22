import React from 'react';

interface AboutProps {
  expertise: string;
  background: string;
}

const About: React.FC<AboutProps> = ({ expertise, background }) => {
  return (
    <section id="about" className="scroll-mt-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Expertise</h3>
            <p className="text-gray-700 leading-relaxed">{expertise}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Background</h3>
            <p className="text-gray-700 leading-relaxed">{background}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;