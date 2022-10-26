import React from 'react'
import { useSelector } from 'react-redux'

import Header from './Header/Header'
import {
  selectIsEventCreatorWindowVisible,
  selectIsEventModalVisible,
  selectCurrentCalendarView,
} from '../../redux/selectors'
import MonthlyCalendar from './MonthViewCalendar/MonthCalendar'
import { YearViewCalendar } from './YearViewCalendar/YearViewCalendar'
import EventCreatorDialog from './EventCreator/EventCreatorDialog'
import { EventDetailsPopup } from './EventDetailsModal/ShowEventDetails/ShowEventDetails'
import { ListOfEventsView } from './ListOfEventsCalendar/ListOfEventsView'
import { DayViewCalendar } from './DayViewCalendar/DayViewCalendar'
import { WeekViewCalendar } from './WeekViewCalendar/WeekViewCalendar'

const Calendar: React.FC = () => {
  const isEventCreatorWindowVisible = useSelector(
    selectIsEventCreatorWindowVisible
  )
  const isEventModalVisible = useSelector(selectIsEventModalVisible)
  const currentCalendarView = useSelector(selectCurrentCalendarView)

  return (
    <div className="w-9/12 mt-8 h-[calc(100%-82px)] bg-inherit">
      <Header />
      <div
        className={`w-full h-[calc(100%-60px)] ${
          currentCalendarView === 'day' || currentCalendarView === 'week'
            ? 'p-2 mt-8 border-solid border-[1px] border-[rgba(48,48,48,0.2)] rounded-[20px]'
            : 'py-6 overflow-y-auto'
        }`}
      >
        {returnCalendarView(currentCalendarView)}
        {isEventCreatorWindowVisible ? <EventCreatorDialog /> : null}
        {isEventModalVisible ? <EventDetailsPopup /> : null}
      </div>
    </div>
  )
}

const returnCalendarView = (view: string) => {
  switch (view) {
    case 'month':
      return <MonthlyCalendar size="large" />
    case 'year':
      return <YearViewCalendar />
    case 'week':
      return <WeekViewCalendar />
    case 'day':
      return <DayViewCalendar />
    case 'list':
      return <ListOfEventsView />
    default:
      return <MonthlyCalendar size="large" />
  }
}

export default Calendar
