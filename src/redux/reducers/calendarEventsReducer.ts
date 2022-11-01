import { getCurrentDate } from '../../helpers/getCurrentDate';
import { createCalendarMatrix } from '../../helpers/createCalendar';
import { CalendarInitialState } from '../../ts-generalTypes/InitialStateInterfaces';
import { CalendarEventAction } from '../../ts-generalTypes/calendarActionInterfaces';
import { ActionType } from '../ActionTypesConstants';
import { getLocalStorageData } from '../../helpers/local-storage-utils';
import moment from 'moment';

const initialCalendar = createCalendarMatrix();
const dataInLocalStorage = getLocalStorageData('events')!;
const initialState: CalendarInitialState = {
  currentDate: getCurrentDate(),
  currentCalendar: initialCalendar,
  currentSelectedDate: '',
  events: dataInLocalStorage,
  curentSelectedEventId: '',
  currentCalendarView: 'month',
};

const calendarEventsReducer = (
  state = initialState,
  action: CalendarEventAction
) => {
  switch (action.type) {
    case ActionType.PAGE_WAS_LOADED:
      return state.events;

    case ActionType.SET_DATE_TO_TODAY:
      return {
        ...state,
        currentCalendar: createCalendarMatrix(
          undefined,
          undefined,
          new Date().getMonth(),
          new Date().getFullYear()
        ),
        currentSelectedDate: moment(new Date()).format('YYYY-M-DD'),
      };

    case ActionType.SWITCH_TO_A_MONTH_AGO:
      return {
        ...state,
        currentCalendar: createCalendarMatrix(undefined, action.payload),
      };

    case ActionType.SWITCH_TO_ONE_MONTH_FORWARD:
      return {
        ...state,
        currentCalendar: createCalendarMatrix(undefined, action.payload),
      };

    case ActionType.SET_SELECTED_EVENT_ID:
      return {
        ...state,
        curentSelectedEventId: action.payload,
      };
    case ActionType.ADD_NEW_EVENT_TO_LIST:
      return {
        ...state,
        events: [...(state.events || []), action.payload],
      };
    case ActionType.DELETE_CALENDAR_EVENT:
      const deleteIndex = state.events
        .map((item) => item.uniqueEventId)
        .indexOf(action.payload);

      return {
        ...state,
        events: [
          ...state.events.slice(0, deleteIndex),
          ...state.events.slice(deleteIndex + 1),
        ],
      };
    case ActionType.UPDATE_EVENT_DATA:
      const id = action.payload.uniqueEventId;

      const updateIndex = state.events
        .map((item) => item.uniqueEventId)
        .indexOf(id);

      return {
        ...state,
        events: [
          ...state.events.slice(0, updateIndex),
          action.payload,
          ...state.events.slice(updateIndex + 1),
        ],
      };
    case ActionType.SET_SELECTED_DATE:
      return {
        ...state,
        currentSelectedDate: action.payload,
      };

    default:
      return state;
  }
};

export default calendarEventsReducer;
