import { RootReducer } from '../ts-generalTypes/InitialStateInterfaces';

export const selectCurrentCalendar = (state: RootReducer) =>
  state.calendar.currentCalendar;
export const selectIsEventCreatorWindowVisible = (state: RootReducer) =>
  state.uiReducer.isEventCreatorWindowVisible;
export const selectCurrentSelectedEventId = (state: RootReducer) =>
  state.calendar.curentSelectedEventId;
export const selectWeekDaysName = (state: RootReducer) =>
  state.uiReducer.downloadWeekDaysName;
export const selectIsEventModalVisible = (state: RootReducer) =>
  state.uiReducer.isEventModalVisible;
export const setIsEventModalEditable = (state: RootReducer) =>
  state.uiReducer.isEventModalEditable;
export const setListOfEventsInStorage = (state: RootReducer) =>
  state.calendar.events;
export const selectisLoginWindowVisible = (state: RootReducer) =>
  state.uiReducer.isLoginWindowVisible;
export const selectCurrentCalendarView = (state: RootReducer) =>
  state.uiReducer.currentCalendarView;
export const selectCurrentDate = (state: RootReducer) =>
  state.calendar.currentDate;
export const selectCurrentSelectedDate = (state: RootReducer) =>
  state.calendar.currentSelectedDate;
export const selectModalDate = (state: RootReducer) =>
  state.uiReducer.modalDate;
