import React from 'react';
import { ArrowProps } from 'react-multi-carousel/lib/types';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

interface Props extends ArrowProps {
  className?: string;
}

export const CustomLeftArrow = ({ onClick, className }: Props) => {
  return (
    <button
      onClick={() => onClick && onClick()}
      className={`absolute outline-none rounded-full z-[1000] border-solid border-2 border-[#a04ef6] bg-[#fff]/[0.7] hover:bg-[#fff] w-min-[43px] h-min-[43px] cursor-pointer px-[16px] py-[15px] ${
        className ? className : 'left-[calc(2%+1px)]'
      }`}
    >
      <LeftOutlined style={{ fontSize: '20px', color: '#a04ef6' }} />
    </button>
  );
};

export const CustomRightArrow = ({ onClick, className }: Props) => {
  return (
    <button
      onClick={() => onClick && onClick()}
      className={`absolute outline-none rounded-full z-[1000] border-solid border-2 border-[#a04ef6] bg-[#fff]/[0.7] hover:bg-[#fff] w-min-[43px] h-min-[43px] cursor-pointer px-[16px] py-[15px] ${
        className ? className : 'right-[calc(2%+1px)]'
      }`}
    >
      <RightOutlined style={{ fontSize: '20px', color: '#a04ef6' }} />
    </button>
  );
};
