import React from 'react';
import { useSelector } from 'react-redux';

import { selectCurrentCalendar } from '../../../../redux/selectors';

export const CurrentDateHeader = () => {
  const currentCalendar = useSelector(selectCurrentCalendar)!;
  const searchValue: string = currentCalendar[1][1].id;
  const parcedSearchValue: string[] = searchValue.split('-');
  let date: Date = new Date(
    +parcedSearchValue[0],
    +parcedSearchValue[1] - 1,
    +parcedSearchValue[2]
  );

  return (
    <div className="current-date-header text-inherit font-sans text-[22px] font-bold tracking-normal leading-7 whitespace-nowrap flex items-center mx-4">
      {`${date.toLocaleString('en', { month: 'long' })} ${date.getFullYear()}`}
    </div>
  );
};
