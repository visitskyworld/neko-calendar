import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DownOutlined } from '@ant-design/icons';

import { changeCalendarView } from '../../../../redux/actions/actionsUI';
import { selectCurrentCalendarView } from '../../../../redux/selectors';

export const CalendarViewChanger = () => {
  const dispatch = useDispatch();
  const currentCalendarView = useSelector(selectCurrentCalendarView);
  const changeViewHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeCalendarView(e.target.value!));
  };
  return (
    <div className="relative w-full lg:max-w-sm">
      <select
        className="calendar-view-changer w-full px-3 py-3 text-white font-bold bg-gradient-to-r from-[#a04ef6] to-[#f64ee5] rounded-md cursor-pointer focus:outline-none hover:shadow-[0px_6px_24px_-2px_rgba(0,0,0,0.3)] ease-in-out duration-150"
        onChange={changeViewHandler}
        value={currentCalendarView}
      >
        <option value="month" className="text-black">
          Monthly
        </option>
        <option value="week" className="text-black">
          Weekly
        </option>
        <option value="day" className="text-black">
          Daily
        </option>
      </select>
    </div>
  );
};
