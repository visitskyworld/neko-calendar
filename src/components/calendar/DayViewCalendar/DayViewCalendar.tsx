import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'

import { openEventCreatorWindow } from '../../../redux/actions/actionsUI'
import { setSelectedEventId } from '../../../redux/actions/actionsCalendar'

import { HourCell } from './HourCell'
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary'
import { EventInDayView } from './EventInDayView'
import {
  selectCurrentSelectedDate,
  setListOfEventsInStorage,
} from '../../../redux/selectors'
import { day_hours } from '../../../helpers/fixtures'

export const DayViewCalendar = () => {
  const dispatch = useDispatch()

  const currentSelectedDate =
    useSelector(selectCurrentSelectedDate) ||
    moment(new Date()).format('YYYY-M-D')
  const listOfEvents = useSelector(setListOfEventsInStorage)
  const listOfEventsThisDay = listOfEvents?.filter(
    (event) =>
      moment(event.date).format('YYYY-M-D') ===
      moment(currentSelectedDate).format('YYYY-M-D')
  )
  const clickOnCellHandler = (event: React.MouseEvent) => {
    const currentTarget = event.target as HTMLDivElement
    if (currentTarget.className.includes('hour-cell')) {
      dispatch(
        setSelectedEventId(moment(currentSelectedDate).format('YYYY-M-D'))
      )
      dispatch(openEventCreatorWindow())
    } else {
      return
    }
  }

  const [eventsWithCoordinates, seteventsWithCoordinates] = React.useState<
    {}[]
  >([])

  useEffect(() => {
    const timeSlots = Array.from(document.querySelectorAll('.half-of-an-hour'))
    const slotWrapper = document.querySelector('.day-events-wrapper')
    const wrapperCoordinates = slotWrapper?.getBoundingClientRect()
    const halfHeight = 25
    let arr: { id: string; top: number }[] = []
    for (let t of timeSlots) {
      let coordinates = t.getBoundingClientRect()
      let id = t.id
      arr.push({
        id,
        top:
          coordinates.bottom - (wrapperCoordinates?.top ?? 0) - halfHeight / 2,
      })
    }
    let newArr: any[] = [],
      topMap: Record<number, number> = {}
    if (listOfEventsThisDay?.length > 0) {
      listOfEventsThisDay.forEach((item) => {
        let a = arr.filter((item_a) => item.time === item_a.id)
        if (topMap[a[0].top] >= 0) {
          topMap[a[0].top] += 1
        } else {
          topMap[a[0].top] = 0
        }
        newArr.push({
          ...item,
          x1: a[0].top,
          x2: a[0].top + halfHeight,
          idx: topMap[a[0].top],
        })
      })
    }
    seteventsWithCoordinates(newArr)
  }, [listOfEvents, currentSelectedDate])

  return (
    <div className="day-view-wrapper relative w-full h-[calc(100%-22px)]">
      <ErrorBoundary>
        <div className="data-day-view-wrapper flex flex-col text-black pl-[50px]">
          <span className="font-bold text-left text-[#a04ef6]">
            {moment(new Date(currentSelectedDate)).format('ddd')}
          </span>
          <div className="w-[30px] h-[30px] flex justify-center items-center font-medium text-white rounded-full bg-[#a04ef6]">
            {moment(new Date(currentSelectedDate)).format('D')}
          </div>
        </div>
        <div className="relative day-events-wrapper h-[calc(100%-22px)] overflow-y-auto pr-[11px]">
          {day_hours.map((item, index) => (
            <HourCell
              key={`hour` + index}
              time={item}
              onClickHandler={clickOnCellHandler}
            />
          ))}
          {listOfEventsThisDay?.length > 0
            ? eventsWithCoordinates.map((event: any) => (
                <EventInDayView
                  index={event.idx}
                  key={event}
                  top={event.x1}
                  height={event.x2 - event.x1}
                  id={event.uniqueEventId}
                  date={event.date}
                  description={event.description}
                />
              ))
            : null}
        </div>
      </ErrorBoundary>
    </div>
  )
}
