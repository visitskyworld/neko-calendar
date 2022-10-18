import React from 'react';

import ProjectDetails from './ProjectDetails';
import Collection from './Collection';
import { NFTData } from '../../ts-generalTypes/InitialStateInterfaces';

type Props = {
  data: NFTData;
};

const ProjectContainer: React.FC<Props> = ({ data }) => {
  return (
    <div className="project-container translate-y-[-150px] w-full h-[calc(100%-150px)] pl-14 pr-6 overflow-y-auto">
      <ProjectDetails data={data} />
      <Collection data={data} />
    </div>
  );
};

export default ProjectContainer;
