import React, { useState } from 'react';

import {
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
  StarOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';

type Props = {
  icon: string;
};

export const ProjectIcon: React.FC<Props> = ({ icon }) => {
  const [hovered, setHovered] = useState<boolean>(false);

  const icons: Record<string, { icon: React.ReactElement; text: string }> = {
    Twitter: {
      icon: <TwitterOutlined style={{ fontSize: '150%' }} />,
      text: 'Twitter',
    },
    Facebook: {
      icon: <FacebookOutlined style={{ fontSize: '150%' }} />,
      text: 'Facebook',
    },
    Instagram: {
      icon: <InstagramOutlined style={{ fontSize: '150%' }} />,
      text: 'Instagram',
    },
    Star: {
      icon: <StarOutlined style={{ fontSize: '150%' }} />,
      text: 'Star',
    },
    Ellipsis: {
      icon: <EllipsisOutlined style={{ fontSize: '150%' }} />,
      text: 'More',
    },
    Default: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a04ef6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={hovered ? 'stroke-white' : ''}
        >
          <path d="M12 2l9 4.9V17L12 22l-9-4.9V7z" />
        </svg>
      ),
      text: 'Website',
    },
  };

  return (
    <React.Fragment>
      <div
        className="relative group flex items-center mr-1 p-4 border-[1px] border-[#a04ef6] text-[#a04ef6] rounded-xl hover:bg-gradient-to-r from-[#a04ef6] to-[#f64ee5] hover:text-white cursor-pointer"
        data-tooltip-target="tooltip"
        data-tooltip-trigger="hover"
        data-tooltip-placement="bottom"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {icons[icon].icon}
        <div className="absolute w-20 top-[36px] -left-[27%] flex flex-col items-center hidden mt-6 group-hover:flex">
          <div className="w-3 h-3 -mb-2 rotate-45 bg-[#a04ef6]"></div>
          <span className="relative z-10 py-2 px-5 rounded text-xs leading-none text-white whitespace-no-wrap bg-[#a04ef6] shadow-lg">
            {icons[icon].text}
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export const makeColoredIcon = () => {};
