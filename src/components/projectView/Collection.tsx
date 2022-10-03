import React from 'react';

const Collection: React.FC = () => {
  return (
    <div className="flex flex-col w-full md:w-4/12">
      <span className="font-bold text-2xl mb-3">Collection</span>
      <div className="flex flex-wrap">
        <div className="w-[120px] h-[120px] bg-[#eae8e8] m-1 transition duration-500 hover:scale-125 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] cursor-pointer"></div>
        <div className="w-[120px] h-[120px] bg-[#eae8e8] m-1 transition duration-500 hover:scale-125 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] cursor-pointer"></div>
        <div className="w-[120px] h-[120px] bg-[#eae8e8] m-1 transition duration-500 hover:scale-125 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] cursor-pointer"></div>
        <div className="w-[120px] h-[120px] bg-[#eae8e8] m-1 transition duration-500 hover:scale-125 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] cursor-pointer"></div>
        <div className="w-[120px] h-[120px] bg-[#eae8e8] m-1 transition duration-500 hover:scale-125 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] cursor-pointer"></div>
        <div className="w-[120px] h-[120px] bg-[#eae8e8] m-1 transition duration-500 hover:scale-125 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] cursor-pointer"></div>
      </div>
    </div>
  );
};

export default Collection;
