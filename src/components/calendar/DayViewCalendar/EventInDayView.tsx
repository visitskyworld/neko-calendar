import React from 'react';
import { useDispatch } from 'react-redux';

import { openEventModalPopup } from '../../../redux/actions/actionsUI';
import { setSelectedEventId } from '../../../redux/actions/actionsCalendar';

interface EventInDayViewProps {
  id: string;
  top: number;
  height: number;
  description: string;
  date: string;
  index: number;
}

export const EventInDayView = ({
  top,
  height,
  description,
  id,
  date,
  index,
}: EventInDayViewProps) => {
  const dispatch = useDispatch();
  const handleOnEventClick = () => {
    dispatch(setSelectedEventId(id));
    dispatch(openEventModalPopup(date!));
  };
  const offset = index * 36;

  return (
    <div
      style={{
        top,
        height,
        left: offset + 64,
        width: `calc(100% - ${offset + 64}px)`,
      }}
      className="absolute pr-[11px] text-black opacity-90 cursor-pointer"
      onClick={handleOnEventClick}
    >
      <div className="h-full bg-[#ffefe3] text-[#303030] pl-[12px] leading-[25px] rounded-[5px] hover:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.15)] ease-in-out duration-150 truncate">
        || {description}
      </div>
    </div>
  );
};
