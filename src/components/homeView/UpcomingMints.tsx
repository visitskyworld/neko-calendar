import React from 'react';

import Mint from './mint/Mint';
import { UpComingMints } from '../../redux/mocked-data';

const UpcomingMints: React.FC = () => {
  return (
    <div className="2xl:w-3/5 h-[450px] bg-[#f6f5fa] rounded-[20px] pt-[24px] pl-[45px] pr-[10px] mr-[1.1rem] mb-4">
      <span className="text-2xl font-semibold pl-1">Your upcoming mints</span>
      <div className="flex justify-center flex-wrap upcoming-mint-h h-[calc(100%-33px)] overflow-y-auto pr-2">
        {UpComingMints.map((mint, index) => (
          <Mint mint={mint} key={mint.title && mint.title + index} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingMints;
