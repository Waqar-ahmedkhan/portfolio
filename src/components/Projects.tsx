import React from 'react';
import ProjectCards from './ProjectCards';


function Projects() {
  return (
    <div className="py-[16rem]  text-white ">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-teal-400 text-sm uppercase tracking-wide mb-2">Real-World Results</h2>
        <h1 className="text-4xl font-bold mb-4">Featured Projects</h1>
        <p className="text-gray-400 mb-8">
          See how I transformed concepts into engaging digital experiences.
        </p>
        
        {/* <ProjectCards
          title="Dark SaaS Landing Page"
          company="ACME Corp"
          year="2022"
          description="A modern, dark-themed landing page for a SaaS product."
          achievements={[
            "Enhanced user experience by 40%",
            "Improved site speed by 50%",
            "Increased mobile traffic by 35%"
          ]}
          imageUrl="/path/to/project-image.jpg"
        /> */}
        
     
      </div>
    </div>
  );
}

export default Projects;