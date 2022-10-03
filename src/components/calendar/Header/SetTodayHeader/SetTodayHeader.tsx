import React from 'react';
import { useDispatch } from 'react-redux';

import { setToday } from '../../../../redux/actions/actionsCalendar';

export const SetTodayHeader = () => {
  const dispatch = useDispatch();

  return (
    <button
      className="font-bold bg-gradient-to-r from-[#a04ef6] to-[#f64ee5] text-white rounded-md px-6 py-3 focus:outline-none hover:shadow-[0px_6px_24px_-2px_rgba(0,0,0,0.3)] ease-in-out duration-150"
      onClick={() => dispatch(setToday())}
    >
      Today
    </button>
  );
};
