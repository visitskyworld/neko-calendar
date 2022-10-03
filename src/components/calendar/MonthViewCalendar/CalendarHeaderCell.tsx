import React from 'react';
import moment from 'moment';
export interface CalendarHeaderCellProps {
  id: number;
  day: string;
  size: string;
  children?: JSX.Element;
}

export const CalendarHeaderCell = ({
  id,
  day,
  size,
}: CalendarHeaderCellProps) => {
  const currentDay = moment(new Date()).format('ddd');

  return (
    <div
      key={`header` + id}
      className={
        size === 'small'
          ? 'w-1/4 flex-1 flex justify-center items-stretch text-[8px] border-solid border-[1px] border-[#cccccc] overflow-auto font-bold border-none w-[34px] h-[34px] overflow-hidden capitalize'
          : day === currentDay
          ? 'w-1/4 flex-1 flex justify-center items-center text-[#a04ef6] border-solid last:border-r-0 border-r-[1px] border-[rgba(48,48,48,0.1)] overflow-auto font-bold capitalize'
          : 'w-1/4 flex-1 flex justify-center items-center border-solid last:border-r-0 border-r-[1px] border-[rgba(48,48,48,0.1)] overflow-auto font-bold capitalize'
      }
    >
      {day}
    </div>
  );
};
