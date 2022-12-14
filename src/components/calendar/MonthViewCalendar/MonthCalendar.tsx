import React from 'react';
import { useSelector } from 'react-redux';

import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import {
  selectWeekDaysName,
  selectCurrentCalendar,
  selectCurrentCalendarView,
} from '../../../redux/selectors';
import { CalendarHeaderCell } from './CalendarHeaderCell';
import { MonthCalendarCell } from './MonthCalendarCell';
import { DayType } from '../../../ts-generalTypes/propTypes';

interface MonthCalendarProps {
  size: string;
  isHome?: boolean;
  calendarMatrix?: DayType[][];
}

const Calendar = ({ size, isHome, calendarMatrix }: MonthCalendarProps) => {
  const weekDaysName = useSelector(selectWeekDaysName);
  const currentCalendar = useSelector(selectCurrentCalendar);
  const calendar = calendarMatrix ? calendarMatrix : currentCalendar!;
  const currentCalendarView = useSelector(selectCurrentCalendarView);

  const renderCalendarWeek = (week: DayType[]) => (
    <div
      key={Math.random() * 1000}
      className={`flex w-full relative top-0 left-0 right-0 bottom-0 ${
        isHome ? ' h-[15%]' : ' h-[15.846%]'
      }`}
    >
      {week.map(({ id, day, isCurrentMonth, isToday }: DayType) => (
        <MonthCalendarCell
          key={`cell` + id}
          id={id}
          day={day}
          isCurrentMonth={isCurrentMonth}
          isToday={isToday}
          size={size}
          isHome={isHome}
        />
      ))}
    </div>
  );

  return (
    <div
      className={`month-calendar w-full font-[1em] ${
        currentCalendarView === 'month'
          ? isHome
            ? 'h-[calc(100%-55px)] pb-4 overflow-hidden'
            : 'h-full border-solid border-[1px] rounded-[20px] overflow-hidden'
          : ''
      }`}
    >
      <ErrorBoundary>
        <div
          key={0}
          className={`flex w-full h-[5%] relative top-0 left-0 right-0 bottom-0 ${
            isHome && 'calendar-header-row'
          }`}
        >
          {weekDaysName.map(({ id, day }) => (
            <CalendarHeaderCell
              key={`header` + id}
              id={id}
              day={day}
              size={size}
              isHome={isHome}
            />
          ))}
        </div>
        {isHome && (
          <div className="w-full px-[10px] mb-[10px]">
            <div className="border border-b-[0.5px] border-[#303030]/[0.04]"></div>
          </div>
        )}
      </ErrorBoundary>
      <ErrorBoundary>{calendar.map(renderCalendarWeek)}</ErrorBoundary>
    </div>
  );
};

export default Calendar;
