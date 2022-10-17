import React from 'react';

import ProjectContainer from './ProjectContainer';

const ProjectView: React.FC = () => {
  return (
    <div className="pt-8 h-[calc(100%-74px)]">
      <div className="project-details w-full h-full relative border-[1px] border-[#303030]/[0.1] rounded-[20px]">
        <img
          src="/assets/img/neko_no_mori.png"
          className="w-full h-[250px] gradient-mask"
        />
        <ProjectContainer />
      </div>
    </div>
  );
};

export default ProjectView;
