import React from 'react';

interface HourCellProps {
  time: string;
  onClickHandler: (event: React.MouseEvent) => void;
}

export const HourCell = ({ time, onClickHandler }: HourCellProps) => {
  const isMorning = time.includes('AM');
  const timeForId = time.split(' ');
  return (
    <div
      className="hour-cell flex flex-col justify-center w-[calc(100% - 50px)] h-[50px] text-left text-[15px] ml-[50px]"
      onClick={onClickHandler}
    >
      <span className="hour-cell inline p-0 ml-[-50px] translate-y-2/4">
        {time === '0 AM' ? '12 AM' : time}
      </span>
      <div
        className="hour-cell half-of-an-hour p-0 m-0 relative border-solid border-[1px] border-[#303030]/[0.04]"
        id={time}
      ></div>
      <div
        className="hour-cell half-of-an-hour p-0 m-0 relative h-[calc((100%/2))]"
        id={`${timeForId[0]}:30 ${isMorning ? 'AM' : 'PM'}`}
      ></div>
    </div>
  );
};
