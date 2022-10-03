import React from 'react';

import {
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
  StarOutlined,
  ShareAltOutlined,
  EllipsisOutlined,
  DribbbleOutlined,
} from '@ant-design/icons';

const makeIcon = (icon: string, projectView: boolean) => {
  switch (icon) {
    case 'Twitter':
      return (
        <React.Fragment>
          <div
            className="relative group flex items-center mr-1 p-2 border-[1px] border-black rounded-md hover:bg-black hover:text-white cursor-pointer"
            data-tooltip-target="tooltip"
            data-tooltip-trigger="hover"
            data-tooltip-placement="bottom"
          >
            <TwitterOutlined />
            {projectView && (
              <div className="absolute w-20 top-[13px] -left-[80%] flex flex-col items-center hidden mt-6 group-hover:flex">
                <div className="w-3 h-3 -mb-2 rotate-45 bg-black"></div>
                <span className="relative z-10 py-2 px-5 rounded text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">
                  Twitter
                </span>
              </div>
            )}
          </div>
        </React.Fragment>
      );
    case 'Facebook':
      return (
        <div
          className="relative group flex items-center mr-1 p-2 border-[1px] border-black rounded-md hover:bg-black hover:text-white cursor-pointer"
          data-tooltip-target="tooltip"
        >
          <FacebookOutlined />
          {projectView && (
            <div className="absolute w-20 top-[13px] -left-[80%] flex flex-col items-center hidden mt-6 group-hover:flex">
              <div className="w-3 h-3 -mb-2 rotate-45 bg-black"></div>
              <span className="relative z-10 py-2 px-5 rounded text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">
                Facebook
              </span>
            </div>
          )}
        </div>
      );
    case 'Instagram':
      return (
        <div
          className="relative group flex items-center mr-1 p-2 border-[1px] border-black rounded-md hover:bg-black hover:text-white cursor-pointer"
          data-tooltip-target="tooltip"
        >
          <InstagramOutlined />
          {projectView && (
            <div className="absolute w-20 top-[13px] -left-[80%] flex flex-col items-center hidden mt-6 group-hover:flex">
              <div className="w-3 h-3 -mb-2 rotate-45 bg-black"></div>
              <span className="relative z-10 py-2 px-5 rounded text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">
                Instagram
              </span>
            </div>
          )}
        </div>
      );
    case 'Star':
      return (
        <div
          className="relative group flex items-center mr-1 p-2 border-[1px] border-black rounded-md hover:bg-black hover:text-white cursor-pointer"
          data-tooltip-target="tooltip"
        >
          <StarOutlined />
          {projectView && (
            <div className="absolute w-20 top-[13px] -left-[80%] flex flex-col items-center hidden mt-6 group-hover:flex">
              <div className="w-3 h-3 -mb-2 rotate-45 bg-black"></div>
              <span className="relative z-10 py-2 px-5 rounded text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">
                Like
              </span>
            </div>
          )}
        </div>
      );
    case 'Share':
      return (
        <div
          className="relative group flex items-center mr-1 p-2 border-[1px] border-black rounded-md hover:bg-black hover:text-white cursor-pointer"
          data-tooltip-target="tooltip"
        >
          <ShareAltOutlined />
          {projectView && (
            <div className="absolute w-20 top-[13px] -left-[80%] flex flex-col items-center hidden mt-6 group-hover:flex">
              <div className="w-3 h-3 -mb-2 rotate-45 bg-black"></div>
              <span className="relative z-10 py-2 px-5 rounded text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">
                Share
              </span>
            </div>
          )}
        </div>
      );
    case 'Ellipsis':
      return (
        <div
          className="relative group flex items-center mr-1 p-2 border-[1px] border-black rounded-md hover:bg-black hover:text-white cursor-pointer"
          data-tooltip-target="tooltip"
        >
          <EllipsisOutlined />
        </div>
      );
    case 'Dribbble':
      return (
        <React.Fragment>
          <div
            className="relative group flex items-center mr-1 p-2 border-[1px] border-black rounded-md hover:bg-black hover:text-white cursor-pointer"
            data-tooltip-target="tooltip"
            data-tooltip-trigger="hover"
            data-tooltip-placement="bottom"
          >
            <DribbbleOutlined />
            {projectView && (
              <div className="absolute w-20 top-[13px] -left-[80%] flex flex-col items-center hidden mt-6 group-hover:flex">
                <div className="w-3 h-3 -mb-2 rotate-45 bg-black"></div>
                <span className="relative z-10 py-2 px-5 rounded text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">
                  Dribbble
                </span>
              </div>
            )}
          </div>
        </React.Fragment>
      );
    default:
      return null;
  }
};

export default makeIcon;
