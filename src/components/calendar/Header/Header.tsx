import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { CurrentDateHeader } from '../Header/CurrentDateHeader/CurrentDateHeader';
import { SetTodayHeader } from './SetTodayHeader/SetTodayHeader';
import { CalendarViewChanger } from './CalendarViewChanger/CalendarViewChanger';
import {
  monthReverse,
  monthForward,
} from '../../../redux/actions/actionsCalendar';
import { selectCurrentCalendarView } from '../../../redux/selectors';

type Props = {
  isHome?: boolean;
};

const Header: React.FC<Props> = ({ isHome }) => {
  const dispatch = useDispatch();
  const currentCalendarView = useSelector(selectCurrentCalendarView);

  return (
    <div className="w-full h-[50px] relative left-0 right-0 top-0 flex justify-start items-center">
      <ErrorBoundary>
        <div className="w-full flex justify-between">
          {!isHome && <SetTodayHeader />}
          {currentCalendarView === 'month' && (
            <div className="mx-auto flex items-center">
              <button
                className="flex rounded-full border-solid border-[1px] border-white hover:border-black p-3 rounded-md"
                type="button"
                onClick={() => dispatch(monthReverse(-1))}
              >
                <LeftOutlined />
              </button>
              <CurrentDateHeader />
              <button
                className="flex rounded-full border-solid border-[1px] border-white hover:border-black p-3 rounded-md"
                type="button"
                onClick={() => dispatch(monthForward(1))}
              >
                <RightOutlined />
              </button>
            </div>
          )}
          {!isHome && (
            <div className="flex justify-end">
              <CalendarViewChanger />
            </div>
          )}
        </div>
      </ErrorBoundary>
    </div>
  );
};

export default Header;
