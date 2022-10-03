import { ActionType } from '../ActionTypesConstants';
import { CalendarEventData } from '../../ts-generalTypes/InitialStateInterfaces';

export const pageOnLoad = () => ({ type: ActionType.PAGE_WAS_LOADED });

export const createEvent = (value: CalendarEventData) => {
  const payload = {
    uniqueEventId: value.uniqueEventId,
    day: value.date,
    title: value.title,
    time: value.time,
    description: value.description,
  };
  return {
    type: ActionType.CREATE_NEW_CALENDAR_EVENT,
    payload,
  };
};

export const deleteEvent = (id: string) => ({
  type: ActionType.DELETE_CALENDAR_EVENT,
  payload: id,
});
export const addNewEventToList = (value: CalendarEventData) => ({
  type: ActionType.ADD_NEW_EVENT_TO_LIST,
  payload: value,
});

export const setToday = () => ({ type: ActionType.SET_DATE_TO_TODAY });

export const monthReverse = (val: number) => ({
  type: ActionType.SWITCH_TO_A_MONTH_AGO,
  payload: val,
});

export const monthForward = (val: number) => ({
  type: ActionType.SWITCH_TO_ONE_MONTH_FORWARD,
  payload: val,
});

export const setSelectedDate = (id: string) => ({
  type: ActionType.SET_SELECTED_DATE,
  payload: id,
});

export const minusOneDay = () => ({
  type: ActionType.SWITCH_TO_A_MINUS_ONE_DAY,
  payload: -1,
});

export const plusOneDayForward = () => ({
  type: ActionType.SWITCH_TO_A_ONE_DAY_FORWARD,
  payload: 1,
});

export const dayComponentWasLoaded = () => ({
  type: ActionType.DAY_COMPONENT_WAS_LOADED,
});

export const monthComponentWasLoaded = () => ({
  type: ActionType.MONTH_COMPONENT_WAS_LOADED,
});

export const setSelectedEventId = (id: string) => ({
  type: ActionType.SET_SELECTED_EVENT_ID,
  payload: id,
});
export const updateEventData = (value: CalendarEventData) => ({
  type: ActionType.UPDATE_EVENT_DATA,
  payload: value,
});
