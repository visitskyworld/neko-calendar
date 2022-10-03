import React from 'react';

import './ProjectView.scss';
import ProjectDetails from './ProjectDetails';
import Collection from './Collection';

const ProjectView: React.FC = () => {
  return (
    <div className="w-full flex flex-wrap p-14 pt-16 mobile-pt-40">
      <ProjectDetails />
      <Collection />
    </div>
  );
};

export default ProjectView;
