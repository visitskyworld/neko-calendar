import React from 'react';

import { MintData } from '../../../ts-generalTypes/InitialStateInterfaces';

const Mint: React.FC<{ mint: MintData }> = ({ mint }) => {
  return (
    <div className="flex pt-6 mr-5 mb-3">
      <div className="mint 3xl:w-[180px] w-[120px] flex flex-col items-center">
        <img
          src={mint.mint}
          className="w-full 3xl:h-[180px] h-[120px] rounded-[20px]"
          alt="Mint"
        />
        <div className="flex flex-col mt-2 items-center">
          <span className="font-semibold text-base">{mint.title}</span>
          <span className="text-[#303030]/[0.5]">{mint.date}</span>
        </div>
        <button className="w-full h-[45px] mt-2 py-2 border-solid border-2 border-[#a043f6] rounded-lg box-border text-[#a043f6] font-bold hover:bg-gradient-to-r from-[#a04ef6] to-[#f64ee5] hover:text-white hover:border-none">
          See More
        </button>
      </div>
    </div>
  );
};

export default Mint;
