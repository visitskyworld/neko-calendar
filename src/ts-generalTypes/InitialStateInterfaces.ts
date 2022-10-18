import { DayType } from '../ts-generalTypes/propTypes';
export type CalendarEventData = {
  uniqueEventId: string;
  date?: string;
  title: string;
  time: string;
  description: string;
};

export interface UIinitialState {
  isEventCreatorWindowVisible?: boolean;
  isEventModalVisible?: boolean;
  isEventModalEditable: boolean;
  mouseCoordinates?: { x: number; y: number };
  downloadWeekDaysName: { day: string; id: number }[];
  isLoginWindowVisible: boolean;
  currentCalendarView: 'year' | 'month' | 'week' | 'day' | 'list';
  modalDate: string;
}

export interface CalendarInitialState {
  currentDate?: {
    dayName: string;
    data: number;
    month: string;
    year: number;
  };
  currentCalendar?: DayType[][];
  currentSelectedDate?: string;
  events: CalendarEventData[];
  curentSelectedEventId?: string;
  currentCalendarView?: string;
}

export type RootReducer = {
  uiReducer: UIinitialState;
  calendar: CalendarInitialState;
};

export type tDays = {};
export interface NFTData {
  id: number;
  title: string;
  date: string;
  bg: string;
  avatar: string;
  images: string[];
  wlPrice: string;
  wlTime: string;
  wlDate: string;
  publicPrice: string;
  publicTime: string;
  publicDate: string;
  type: string;
  supply: number;
  wallet: string;
  socialMedia: string[];
  notes: string;
}
