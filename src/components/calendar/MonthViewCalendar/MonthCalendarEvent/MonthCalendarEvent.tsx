import React from 'react';
import { useDispatch } from 'react-redux';

import { CalendarEventData } from '../../../../ts-generalTypes/InitialStateInterfaces';
import { openEventModalPopup } from '../../../../redux/actions/actionsUI';
import { setSelectedEventId } from '../../../../redux/actions/actionsCalendar';

interface MonthCalendarEventProps {
  events: CalendarEventData;
  size?: string;
}

export const MonthCalendarEvent = (props: MonthCalendarEventProps) => {
  const dispatch = useDispatch();
  const { uniqueEventId, title, date } = props.events;
  const handleOnEventClick = () => {
    dispatch(setSelectedEventId(`${uniqueEventId}`));
    dispatch(openEventModalPopup(date!));
  };

  return (
    <div
      id={`${uniqueEventId}`}
      className="w-auto bg-[#e3e6ff] m-[3px] text-left box-border overflow-hidden py-0 pl-[5px] font-medium text-[15px] text-black rounded-[5px] hover:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.15)] ease-in-out duration-150"
      onClick={handleOnEventClick}
    >
      <p className="m-0">{title}</p>
    </div>
  );
};
