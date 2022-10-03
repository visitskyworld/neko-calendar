import React from 'react';

import MonthCalendar from '../MonthViewCalendar/MonthCalendar';
import { useSelector } from 'react-redux';
import { createYearCalendarMatrix } from '../../../helpers/createYearCalendar';
import { selectCurrentDate } from '../../../redux/selectors';

export const YearViewCalendar = () => {
  const { year } = useSelector(selectCurrentDate)!;
  const month: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <div className="flex flex-wrap justify-center content-center w-full">
      {month.map((calendar, idx) => (
        <div
          key={idx}
          className="month-in-year-wrapper xl:w-[calc(100%/4)] lg:w-[calc(100%/2)] text-[0.8em] p-5"
        >
          <h3 className="m-0 font-bold">{`${calendar} ${year}`}</h3>
          <MonthCalendar
            size="small"
            calendarMatrix={createYearCalendarMatrix(
              new Date(Number(year), idx, 1)
            )}
          />
        </div>
      ))}
    </div>
  );
};
