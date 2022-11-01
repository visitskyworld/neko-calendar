import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import getThisWeek from '../../../helpers/getThisWeek';
import { day_hours } from '../../../helpers/fixtures';
import { openEventCreatorWindow } from '../../../redux/actions/actionsUI';
import { setSelectedEventId } from '../../../redux/actions/actionsCalendar';
import {
  selectWeekDaysName,
  setListOfEventsInStorage,
} from '../../../redux/selectors';
import { CalendarEventData } from '../../../ts-generalTypes/InitialStateInterfaces';
import { EventInWeekView } from './EventInWeekView';
import React from 'react';

export const WeekViewCalendar = () => {
  const dispatch = useDispatch();
  const weekDays = useSelector(selectWeekDaysName);
  const days = getThisWeek();
  const currentDay = moment(new Date()).format('ddd');
  const listOfEventsInStorage = useSelector(setListOfEventsInStorage);
  const listOfEventsThisWeek = listOfEventsInStorage?.filter(
    (item: CalendarEventData) => {
      return moment(item.date).isSame(new Date(), 'week') && item;
    }
  );

  const isEventOnThisDay = (
    eventDate: string,
    eventTime: string,
    day: number,
    hour: string
  ) => {
    const date = new Date(eventDate);
    const weekDay = date.getUTCDay();
    const [eventHourStr, eventMeridiem] = eventTime.split(' ');
    const eventHour = eventHourStr.split(':')[0];
    const [hourValue, hourMeridiem] = hour.split(' ');
    console.log('>>>>>>>>>>>>>', {
      day,
      weekDay,
      eventHour,
      hourValue,
      eventMeridiem,
      hourMeridiem,
    });

    return (
      weekDay === day &&
      eventHour === hourValue &&
      eventMeridiem === hourMeridiem
    );
  };

  const isEventHalfHour = (eventTime: string) => {
    const halfHour = eventTime.split(' ')[0].split(':')[1];

    return !!halfHour;
  };

  const clickCellHandler = (day: Date) => (event: React.MouseEvent) => {
    const date = moment(day).format('YYYY-M-D');
    const currentTarget = event.target as HTMLDivElement;
    if (currentTarget.className.includes('weekly-event')) {
      dispatch(setSelectedEventId(date));
      dispatch(openEventCreatorWindow());
    } else {
      return;
    }
  };

  return (
    <>
      <div className="w-full h-full flex flex-col mb-2" id="schedule">
        <div className="flex flex-col flex-1 h-full">
          <div className="sticky top-0 flex flex-col pl-[50px] bg-white z-20">
            <div className="flex">
              {weekDays.map((d, idx) => (
                <div
                  key={`${d}-${idx}`}
                  className="flex flex-1 justify-center items-center min-w-[81px]"
                >
                  <div
                    className={`font-bold ${
                      d.day === currentDay ? 'text-[#a04ef6]' : ''
                    }`}
                  >
                    {d.day}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex">
              {days.map((day, index) => (
                <div
                  key={`${day.getDate()}-${index}`}
                  className="flex flex-1 min-w-[81px] p-1"
                >
                  <div
                    className={`w-6 h-6 rounded-full m-auto flex justify-center items-center
                      ${
                        day.getDate() === new Date().getDate() &&
                        'bg-[#a04ef6] text-white'
                      } ${
                      moment(day).isSame(new Date(), 'month')
                        ? ''
                        : 'text-[#b9b7b7]'
                    }`}
                  >
                    {day.getDate()}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-1 h-[calc(100%-70px)] overflow-y-auto pt-2">
            <div className="bg-white left-0 top-0 w-20 min-w-12 w-12 bg-white z-10">
              {day_hours.map((hour, index) => (
                <div
                  key={`${hour}-${index}`}
                  className="day-hour font-light text-[15px] h-[60px] text-left"
                >
                  {hour === '0 AM' ? '12 AM' : hour}
                </div>
              ))}
            </div>
            <div className="flex flex-1 pl-2 pt-2.5">
              {weekDays.map((day, index) => (
                <div
                  key={`scheduleline-${day}${index}`}
                  className="flex-1 min-w-[81px] flex flex-col relative"
                >
                  {day_hours.map((hour) => {
                    const events =
                      listOfEventsThisWeek
                        ?.filter((event) =>
                          isEventOnThisDay(
                            event.date!,
                            event.time,
                            day.id,
                            hour
                          )
                        )
                        .map((event) => ({
                          ...event,
                          isHalf: isEventHalfHour(event.time),
                        })) ?? [];

                    const exactEvents = events.filter((event) => !event.isHalf);
                    const halfEvents = events.filter((event) => event.isHalf);
                    return (
                      <div
                        key={`schedule-${hour}`}
                        className="relative shrink-0 border border-solid border-transparent border-r-zinc-200 border-t-zinc-200 h-[60px]"
                      >
                        <div
                          className="weekly-event h-full"
                          onClick={clickCellHandler(days[index])}
                        />
                        <div className="absolute left-0 top-0 w-full">
                          {exactEvents &&
                            exactEvents.map((event, index) => (
                              <EventInWeekView
                                eventIndex={index}
                                key={event.uniqueEventId}
                                id={event.uniqueEventId}
                                date={event.date!}
                                description={event.description}
                              />
                            ))}
                        </div>
                        <div className="absolute left-0 top-1/2 w-full">
                          {halfEvents &&
                            halfEvents.map((event, index) => (
                              <EventInWeekView
                                eventIndex={index}
                                key={event.uniqueEventId}
                                id={event.uniqueEventId}
                                date={event.date!}
                                description={event.description}
                              />
                            ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
