import React from 'react';

import { ErrorBoundary } from '../calendar/ErrorBoundary/ErrorBoundary';
import Header from '../calendar/Header/Header';
import Calendar from '../calendar/MonthViewCalendar/MonthCalendar';
import SideMint from './mint/SideMint';
import { NFTs } from '../../redux/mocked-data';

const HomeSide: React.FC = () => {
  return (
    <div className="home-side bg-[#f6f5fa] rounded-[20px] h-full pt-[20px] pb-[25px] px-8 overflow-y-auto">
      <ErrorBoundary>
        <div className="user flex flex-col items-center mb-6">
          <img
            className="w-[170px] h-[170px] rounded-full"
            src="/Ellipse.png"
            alt="User Avatar"
          />
          <span className="text-xl font-semibold mt-5">Elijah Scott</span>
        </div>
        <div className="h-[32%] bg-white rounded-[20px] px-6 pt-1">
          <Header isHome={true} />
          <Calendar size="small" isHome={true} />
        </div>
        <div className="side-mints-container mt-6 h-[27%px]">
          <span className="font-semibold text-lg">Your upcoming mints</span>
          {NFTs.slice(0, 3).map((item, index) => (
            <SideMint mint={item} key={`side-${index}`} />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <button className="bg-gradient-to-r from-[#a04ef6] to-[#f64ee5] text-[15px] text-white font-bold py-4 px-7 rounded-md hover:shadow-[0px_6px_24px_-2px_rgba(0,0,0,0.3)] ease-in-out duration-150">
            <span className="font-normal mr-2">+</span>
            Add Project
          </button>
        </div>
      </ErrorBoundary>
    </div>
  );
};

export default HomeSide;
