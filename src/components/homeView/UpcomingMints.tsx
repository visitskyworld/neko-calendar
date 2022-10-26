import React from 'react'

import Mint from './mint/Mint'
import { UpComingMints } from '../../redux/mocked-data'

const UpcomingMints: React.FC = () => {
  return (
    <div className="2xl:w-3/5 h-[450px] bg-[#f6f5fa] rounded-[20px] pt-[24px] pl-[45px] pr-[10px] mr-[1.1rem] mb-4">
      <span className="text-xl font-semibold">Your upcoming mints</span>
      <div className="flex flex-wrap upcoming-mint-h overflow-y-auto pr-2">
        {UpComingMints.map((mint, index) => (
          <Mint mint={mint} key={mint.title && mint.title + index} />
        ))}
      </div>
    </div>
  )
}

export default UpcomingMints
