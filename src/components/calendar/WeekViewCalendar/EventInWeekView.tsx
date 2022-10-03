import React from 'react';
import { useDispatch } from 'react-redux';

import { openEventModalPopup } from '../../../redux/actions/actionsUI';
import { setSelectedEventId } from '../../../redux/actions/actionsCalendar';

interface EventInWeekViewProps {
  id: string;
  description: string;
  date: string;
  eventIndex: number;
}

export const EventInWeekView = ({
  description,
  id,
  date,
  eventIndex,
}: EventInWeekViewProps) => {
  const dispatch = useDispatch();
  const handleOnEventClick = () => {
    dispatch(setSelectedEventId(id));
    dispatch(openEventModalPopup(date!));
  };
  const offset = eventIndex * 36;

  return (
    <div
      style={{ left: offset, width: `calc(100% - ${offset}px)` }}
      className="absolute text-black opacity-90 cursor-pointer"
      onClick={handleOnEventClick}
    >
      <div className="h-full bg-[#ffefe3] text-[#303030] pl-[12px] leading-[25px] rounded-[5px] hover:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.15)] ease-in-out duration-150 truncate">
        || {description}
      </div>
    </div>
  );
};
