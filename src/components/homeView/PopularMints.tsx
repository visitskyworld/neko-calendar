import React, { useState } from 'react';
import Carousel from 'react-spring-3d-carousel';

import { PopMints } from '../../redux/mocked-data';
import { CustomLeftArrow, CustomRightArrow } from '../utils/CustomArrow';

const PopularMints: React.FC = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((index) => (index - 1 + PopMints.length) % PopMints.length);
  };

  const handleNext = () => {
    setIndex((index) => (index + 1) % PopMints.length);
  };

  return (
    <div className="popular-mints 2xl:w-2/5 h-[450px] shrink-0 bg-[#f6f5fa] rounded-[20px] p-[24px] flex flex-col items-center relative">
      <span className="text-2xl font-semibold self-start pl-[21px]">
        Upcoming popular mints
      </span>
      <div className="flex flex-wrap relative grow">
        <Carousel
          slides={PopMints.map((item, mintIndex) => {
            const isPrev = (mintIndex + 1) % PopMints.length === index;
            const isNext = (index + 1) % PopMints.length === mintIndex;

            return {
              key: 'mint_' + mintIndex,
              content: (
                <div
                  className={`w-[235px] flex flex-col items-center ${
                    isPrev
                      ? '-rotate-[5deg] scale-x-[1.45] scale-y-[1.55] translate-x-[18%] -translate-y-[13%]'
                      : ''
                  } ${
                    isNext
                      ? 'rotate-[5deg] scale-x-[1.45] scale-y-[1.55] -translate-x-[18%] -translate-y-[13%]'
                      : ''
                  }`}
                >
                  <img
                    src={item.mint}
                    className="w-full rounded-[20px] mb-4"
                    alt="mint"
                  />
                  <span
                    className={`font-semibold text-base ${
                      isPrev || isNext ? 'hidden' : ''
                    }`}
                  >
                    {item.title && item.title}
                  </span>
                  <span
                    className={`text-[#303030]/[0.3] ${
                      isPrev || isNext ? 'hidden' : ''
                    }`}
                  >
                    {item.date && item.date}
                  </span>
                </div>
              ),
            };
          })}
          showNavigation={false}
          goToSlide={index}
        />

        <div className="absolute z-[999] top-[35%] -translate-y-1/2 left-0 flex justify-between w-full">
          <CustomLeftArrow
            onClick={handlePrev}
            className="left-[calc(50%-115px)] -translate-x-1/2"
          />
          <CustomRightArrow
            onClick={handleNext}
            className="right-[calc(50%-115px)] translate-x-1/2"
          />
        </div>
      </div>
      <button className="absolute bottom-0 translate-y-[35px] bg-gradient-to-r from-[#a04ef6] to-[#f64ee5] text-[15px] text-white font-bold py-4 px-7 rounded-md mb-5 hover:shadow-[0px_6px_24px_-2px_rgba(0,0,0,0.3)] ease-in-out duration-150 z-[1001]">
        <span className="font-normal mr-2">+</span>
        Add Project
      </button>
    </div>
  );
};

export default PopularMints;
