import React, { useState } from 'react';
import { HiChevronUp, HiChevronDown } from 'react-icons/hi';

import { ProjectIcon } from '../utils/Icon';
import { NFTData } from '../../ts-generalTypes/InitialStateInterfaces';
import moment from 'moment';

type Props = {
  data: NFTData;
};

const ReadMore = ({ children }: { children: string }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className="flex flex-col text-sm mb-0 pr-[30%]">
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

const Details = ({
  value,
  type,
  isLast,
}: {
  value: string;
  type: string;
  isLast: boolean;
}) => {
  return (
    <div className="flex flex-col py-3 px-5 relative">
      <span className="font-semibold text-xl">{value}</span>
      <span className="font-normal text-sm">{type}</span>
      {!isLast && (
        <div className="absolute h-1/2 right-0 top-[27%] border-[1px] border-[#303030]/[0.1]" />
      )}
    </div>
  );
};

const formatTime = (time: string) => {
  if (parseInt(time) > 12) {
    const minutes = time.slice(2);
    const timeFormatted = parseInt(time) - 12;
    return `${timeFormatted + minutes} PM`;
  } else {
    return `${time} AM`;
  }
};

const ProjectDetails: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full flex">
      <div className="w-full flex flex-wrap pr-8">
        <div className="xl:w-9/12 w-full flex flex-wrap 2xl:flex-nowrap">
          <div className="w-[250px] h-[250px] rounded-[20px] shrink-0 mr-8">
            <img
              src="/assets/img/neko1.png"
              className="w-full h-full"
              alt="avatar"
            />
          </div>
          <div className="flex flex-col justify-end mt-4">
            <div className="flex">
              <span className="font-semibold text-4xl mr-3">{data.title}</span>
              <div className="flex items-end font-400 text-base">
                By&nbsp;
                <span className="font-bold tracking-wide">
                  Owner of the project
                </span>
              </div>
            </div>
            <div className="mt-4">
              <ReadMore>{data.notes}</ReadMore>
            </div>
          </div>
        </div>
        <div className="xl:w-3/12 w-full flex flex-col xl:justify-end xl:items-end items-start mt-4">
          <button className="bg-gradient-to-r from-[#a04ef6] to-[#f64ee5] text-xl text-white font-signika font-medium py-4 px-8 rounded-md mb-5">
            + Add Project
          </button>
          <div className="flex items-center">
            <div className="flex pr-2">
              <ProjectIcon icon="Twitter" />
              <ProjectIcon icon="Default" />
              <ProjectIcon icon="Default" />
            </div>
            <span className="h-[40px] w-[1px] bg-[#303030]/[0.3]"></span>
            <div className="flex pl-3">
              <ProjectIcon icon="Star" />
              <ProjectIcon icon="Ellipsis" />
            </div>
          </div>
        </div>
        <div className="w-[57%] flex justify-between flex-wrap 3xl:flex-nowrap pt-8">
          <div className="wl flex items-center mb-4 bg-[#f6f5fa] rounded-[10px]">
            <Details
              value={data.supply.toString()}
              type="Supply"
              isLast={false}
            />
            <Details value={data.wlPrice} type="WL Price" isLast={false} />
            <Details
              value={formatTime(data.wlTime)}
              type="WL Time"
              isLast={false}
            />
            <Details value={data.wlDate} type="WL Date" isLast={true} />
          </div>
          <div className="public flex items-center mb-4 bg-[#f6f5fa] rounded-[10px]">
            <Details
              value={data.publicPrice}
              type="Public Price"
              isLast={false}
            />
            <Details
              value={data.publicTime}
              type="Public Time"
              isLast={false}
            />
            <Details value={data.publicDate} type="Public Date" isLast={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
