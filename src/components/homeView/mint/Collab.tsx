import React from 'react';

import { MintData } from '../../../ts-generalTypes/InitialStateInterfaces';
import { ColoredIcon } from '../../utils/Icon';

const Collab: React.FC<{ collab: MintData }> = ({ collab }) => {
  return (
    <div className="flex flex-col pt-3">
      <div className="collab w-[230px] flex flex-col items-center bg-[#f6f5fa] rounded-[20px] transition duration-300 hover:-translate-y-2">
        <img
          src={collab.mint}
          className="w-full h-[160px] rounded-[20px] p-1"
          alt="Mint"
        />
        <div className="flex flex-col mt-2 items-center pl-5 pr-4">
          <span className="font-medium text-sm">
            {collab.description && collab.description}
          </span>
        </div>
        <div className="w-full flex justify-between pl-5 pr-3 pt-5 pb-3">
          <a href={collab.twitter!} target="_blank">
            <ColoredIcon
              icon="Twitter"
              biggerSize={true}
              className="transition duration-300 hover:scale-125"
            />
          </a>
          <span className="text-[#303030]/[0.3]">8 hours ago</span>
        </div>
      </div>
    </div>
  );
};

export default Collab;
