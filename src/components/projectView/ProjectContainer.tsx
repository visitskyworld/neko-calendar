import React from 'react';

import ProjectDetails from './ProjectDetails';
import Collection from './Collection';

const ProjectContainer: React.FC = () => {
  return (
    <div className="project-container translate-y-[-150px] w-full h-[calc(100%-150px)] pl-14 pr-6 flex flex-col overflow-y-auto">
      <ProjectDetails />
      <Collection />
    </div>
  );
};

export default ProjectContainer;
