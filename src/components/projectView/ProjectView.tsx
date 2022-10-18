import React from 'react';

import ProjectContainer from './ProjectContainer';
import { NFTs } from '../../redux/mocked-data';

const ProjectView: React.FC = () => {
  return (
    <div className="h-full">
      {NFTs.map((nft, index) => {
        return (
          <div
            className="project-details w-full h-full relative border-[1px] border-[#303030]/[0.1] rounded-[20px] mb-8"
            key={`nft-${index}`}
          >
            <img
              src={nft.bg}
              className="w-full h-[250px] gradient-mask"
              alt="header-background"
            />
            <ProjectContainer data={nft} />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectView;
