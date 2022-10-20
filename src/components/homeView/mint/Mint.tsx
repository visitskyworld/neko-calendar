import React from 'react';

import { MintData } from '../../../ts-generalTypes/InitialStateInterfaces';

const Mint: React.FC<{ mint: MintData }> = ({ mint }) => {
  return (
    <div className="flex py-3 mr-3">
      <div className="w-[210px] flex flex-col items-center">
        <img
          src={mint.mint}
          className="w-full h-[210px] rounded-[20px]"
          alt="Mint"
        />
        <div className="flex flex-col mt-2 items-center">
          <span className="font-semibold text-base">{mint.title}</span>
          <span className="text-[#303030]/[0.5]">{mint.date}</span>
        </div>
        <button className="w-full mt-2 py-2 border-solid border-[1px] border-[#a043f6] rounded-lg text-[#a043f6] hover:bg-gradient-to-r from-[#a04ef6] to-[#f64ee5] hover:text-white">
          See More
        </button>
      </div>
    </div>
  );
};

export default Mint;
