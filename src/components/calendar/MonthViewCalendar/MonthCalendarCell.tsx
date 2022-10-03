import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';

import { DayType } from '../../../ts-generalTypes/propTypes';
import { MonthCalendarEvent } from './MonthCalendarEvent/MonthCalendarEvent';
import {
  openEventCreatorWindow,
  changeCalendarView,
} from '../../../redux/actions/actionsUI';
import {
  setSelectedEventId,
  setSelectedDate,
} from '../../../redux/actions/actionsCalendar';
import { CalendarEventData } from '../../../ts-generalTypes/InitialStateInterfaces';
import { setListOfEventsInStorage } from '../../../redux/selectors';

type MonthCalendarCellProps = Pick<
  DayType,
  'id' | 'day' | 'isCurrentMonth' | 'isToday' | 'size'
> & {
  children?: JSX.Element;
};

export const MonthCalendarCell: React.FC<MonthCalendarCellProps> = (props) => {
  const { id, day, isCurrentMonth, isToday, size } = props;
  const dispatch = useDispatch();
  const listOfEventsInStorage = useSelector(setListOfEventsInStorage)! || [];
  const listOfEventsThisDay = listOfEventsInStorage.filter(
    (item: CalendarEventData) => item.date === id
  );
  const clickOnCellHandler = (event: React.MouseEvent) => {
    const currentTarget = event.target as HTMLDivElement;
    if (currentTarget.className.includes('badge')) {
      dispatch(changeCalendarView('day'));
      dispatch(setSelectedDate(id));
    }

    if (!currentTarget.className.includes('day-cell')) {
      return;
    } else {
      dispatch(setSelectedEventId(id));
      dispatch(openEventCreatorWindow());
    }
  };
  let uniqueKey = uniqid();

  return (
    <div
      onClick={clickOnCellHandler}
      key={uniqueKey}
      className={
        size === 'small'
          ? 'day-cell flex-1 w-1/4 items-stretch border-solid border-[1px] border-[rgba(48,48,48,0.1)] overflow-auto font-medium cursor-pointer text-center border-none w-[34px] h-[34px] overflow-hidden font-normal'
          : 'day-cell flex-1 w-1/4 items-stretch border-solid border-l-[1px] border-b-[1px] first:border-l-0 border-[rgba(48,48,48,0.1)] overflow-auto font-medium cursor-pointer text-center'
      }
    >
      <div className="badge inline-block text-black hover:bg-[#f1f5f6] flex justify-center items-center">
        <span
          className={`rounded-[50%] flex justify-center items-center ${
            size === 'small' ? 'w-5 h-5' : 'w-7 h-7'
          }`}
          style={{
            backgroundColor: isToday ? '#a04ef6' : '',
            color: isToday ? '#fff' : !isCurrentMonth ? '#b9b7b7' : '#000',
          }}
        >
          {day}
        </span>
      </div>
      {size === 'small' && listOfEventsThisDay.length > 0 ? (
        <div className="w-[auto] h-[2px] bg-[#1192f6] my-0 mx-auto"></div>
      ) : (
        listOfEventsThisDay.map((event: CalendarEventData) => (
          <MonthCalendarEvent key={uniqueKey} events={event} size={size} />
        ))
      )}
    </div>
  );
};
