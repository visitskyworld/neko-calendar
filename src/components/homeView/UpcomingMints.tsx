import React from 'react';

import Mint from './mint/Mint';
import { UpComingMints } from '../../redux/mocked-data';

const UpcomingMints: React.FC = () => {
  return (
    <div className="2xl:w-3/5 h-[450px] bg-[#f6f5fa] rounded-[20px] p-[20px] mr-3 mb-4">
      <span className="text-xl font-semibold">Your upcoming mints</span>
      <div className="flex flex-wrap h-[calc(100%-40px)] overflow-y-auto pr-2">
        {UpComingMints.map((mint, index) => (
          <Mint mint={mint} key={mint.title && mint.title + index} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingMints;
