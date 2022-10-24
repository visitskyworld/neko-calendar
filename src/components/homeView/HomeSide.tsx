import React from 'react';

import { ErrorBoundary } from '../calendar/ErrorBoundary/ErrorBoundary';
import Header from '../calendar/Header/Header';
import Calendar from '../calendar/MonthViewCalendar/MonthCalendar';
import SideMint from './mint/SideMint';
import { NFTs } from '../../redux/mocked-data';

const HomeSide: React.FC = () => {
  return (
    <div className="bg-[#f6f5fa] rounded-[20px] h-full py-[20px] px-8">
      <ErrorBoundary>
        <div className="user flex flex-col items-center mb-3">
          <img
            className="w-[120px] h-[120px] rounded-full"
            src="/Ellipse.png"
            alt="User Avatar"
          />
          <span className="text-xl font-semibold mt-2">Elijah Scott</span>
        </div>
        <div className="h-[290px] bg-white rounded-[20px] px-6 pt-3 pb-16">
          <Header isHome={true} />
          <Calendar size="small" isHome={true} />
        </div>
        <div className="side-mints-container mt-6 h-[260px]">
          <span className="font-semibold text-lg">Your upcoming mints</span>
          {NFTs.slice(0, 3).map((item, index) => (
            <SideMint mint={item} key={`side-${index}`} />
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-gradient-to-r from-[#a04ef6] to-[#f64ee5] text-lg text-white font-signika font-medium py-3 px-8 rounded-md hover:shadow-[0px_6px_24px_-2px_rgba(0,0,0,0.3)] ease-in-out duration-150">
            + Add Project
          </button>
        </div>
      </ErrorBoundary>
    </div>
  );
};

export default HomeSide;
