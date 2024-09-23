import React from 'react';

const skills = [
  'Full Stack Development',
  'AI & Machine Learning',
  'Web Applications',
  'Open-Source Contributions',
  'Technical Blogging',
  'Coding Challenges'
];

const SkillBadge = ({ skill }) => (
  <span className="bg-blue-500 text-white text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
    {skill}
  </span>
);

const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-lg text-gray-700 mb-4">
            Hello! I'm a passionate developer with experience in building web applications using modern technologies. I love to learn and explore new tools and frameworks to improve my skills and deliver high-quality software.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            In my free time, I enjoy contributing to open-source projects, writing technical blogs, and participating in coding challenges. I'm always eager to take on new challenges and collaborate with others to create amazing projects.
          </p>
          <div className="mt-4">
            <h3 className="text-2xl font-semibold mb-2">Skills</h3>
            <div className="flex flex-wrap">
              {skills.map((skill, index) => (
                <SkillBadge key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};