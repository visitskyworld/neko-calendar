import React, { useState } from 'react';
import { HiChevronUp, HiChevronDown } from 'react-icons/hi';

import makeIcon from '../../helpers/makeIcon';

const ReadMore = ({ children }: { children: string }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className="flex flex-col text-sm mb-0">
      {isReadMore ? text.slice(0, 78) : text}
      <span
        className="cursor-pointer flex items-center font-bold w-24"
        onClick={toggleReadMore}
      >
        {isReadMore ? 'See more' : 'Show less'}
        {isReadMore ? <HiChevronDown /> : <HiChevronUp />}
      </span>
    </p>
  );
};

const Details = ({ value, type }: { value: string; type: string }) => {
  return (
    <div className="flex flex-col mr-2">
      <span className="font-extrabold text-xl">{value}</span>
      <span className="font-normal text-lg">{type}</span>
    </div>
  );
};

const ProjectDetails: React.FC = () => {
  return (
    <div className="w-full">
      <div className="xl:w-9/12 w-full pr-8">
        <div className="flex flex-wrap 2xl:flex-nowrap">
          <div className="w-[250px] h-[250px] rounded-[20px] mr-8">
            <img src="/assets/img/neko1.png" className="w-full h-full" />
          </div>
          <div className="flex flex-col w-[70%] justify-end">
            <div className="flex">
              <span className="font-semibold text-4xl mr-3">Neko no Mori</span>
              <div className="flex items-end font-400 text-base">
                By&nbsp;
                <span className="font-bold tracking-wide">
                  Owner of the project
                </span>
              </div>
            </div>
            <div className="mt-4">
              <ReadMore>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ReadMore>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between pr-32 pt-8">
          <Details value="10/08/22" type="Mint Date" />
          <Details value="5555" type="Supply" />
          <Details value="200" type="Size" />
          <Details value="0.2" type="WL Price" />
          <Details value="0.1" type="Public Price" />
        </div>
        <div className="flex mt-5">
          <div className="flex pr-3 border-solid border-r-[1px] border-[#cccccc]">
            {makeIcon('Twitter', true)}
            {makeIcon('Facebook', true)}
            {makeIcon('Instagram', true)}
          </div>
          <div className="flex pl-3">
            {makeIcon('Star', true)}
            {makeIcon('Share', true)}
            {makeIcon('Ellipsis', true)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
