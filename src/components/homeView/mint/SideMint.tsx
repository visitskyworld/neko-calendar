import React from 'react'

import { NFTData } from '../../../ts-generalTypes/InitialStateInterfaces'

const SideMint: React.FC<{ mint: NFTData }> = ({ mint }) => {
  return (
    <div className="flex py-3 mr-3 border-solid border-b-[1px] border-[#303030]/[0.08] last:border-none cursor-pointer">
      <div className="w-full flex justify-between">
        <div className="flex">
          <img
            src={mint.avatar}
            className="h-12 rounded-full mr-2"
            alt="Mint"
          />
          <div className="flex flex-col justify-center">
            <span className="font-semibold text-sm">{mint.title}</span>
            <span className="text-sm text-[#303030]/[0.5]">{mint.date}</span>
          </div>
        </div>
        <div className="flex flex-col mt-2 items-end">
          <div className="flex">
            <span className="font-semibold text-sm mr-1">WL:</span>
            <span className="font-normal">{mint.wlPrice}</span>
          </div>
          <div className="flex">
            <span className="font-semibold text-sm mr-1">Public:</span>
            <span className="font-normal">{mint.publicPrice}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideMint
