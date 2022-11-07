import React from 'react';
import moment from 'moment';
export interface CalendarHeaderCellProps {
  id: number;
  day: string;
  size: string;
  isHome?: boolean;
  children?: JSX.Element;
}

export const CalendarHeaderCell = ({
  id,
  day,
  size,
  isHome,
}: CalendarHeaderCellProps) => {
  const currentDay = moment().format('ddd');

  return (
    <div
      key={`header` + id}
      className={`calendar-header-cell w-1/4 flex-1 flex justify-center capitalize ${
        size === 'small'
          ? isHome && day === currentDay
            ? 'items-stretch text-[8px] text-[#a04ef6] border-solid border-[1px] border-[#cccccc] overflow-auto font-bold border-none w-[34px] h-[34px] overflow-hidden'
            : 'items-stretch text-[8px] border-solid border-[1px] border-[#cccccc] overflow-auto font-bold border-none w-[34px] h-[34px] overflow-hidden'
          : day === currentDay
          ? 'items-center text-[#a04ef6] border-solid last:border-r-0 border-r-[1px] border-[rgba(48,48,48,0.1)] overflow-auto font-bold'
          : 'items-center border-solid last:border-r-0 border-r-[1px] border-[rgba(48,48,48,0.1)] overflow-auto font-bold'
      }`}
    >
      {isHome ? day.slice(0, 1) : day}
    </div>
  );
};
