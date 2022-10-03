import { ActionType } from '../ActionTypesConstants';

export const openEventCreatorWindow = () => ({
  type: ActionType.OPEN_EVENT_CREATOR_WINDOW,
});

export const closeEventCreatorWindow = () => ({
  type: ActionType.CLOSE_EVENT_CREATOR_WINDOW,
});

export const openEventModalPopup = (date?: string) => ({
  type: ActionType.OPEN_EVENT_MODAL_POPUP,
  payload: date,
});

export const closeEventModalPopup = () => ({
  type: ActionType.CLOSE_EVENT_MODAL_POPUP,
});

export const setMouseCoordinates = (coordinates: object) => ({
  type: ActionType.SET_MOUSE_COORDINATES,
  payload: coordinates,
});

export const makeEventDetailsModalEditable = () => ({
  type: ActionType.EDIT_CALENDAR_EVENT,
});
export const showLoginWindow = () => ({
  type: ActionType.SHOW_LOGIN_WINDOW,
});

export const hideLoginWindow = () => ({
  type: ActionType.HIDE_LOGIN_WINDOW,
});

export const changeCalendarView = (view: string) => ({
  type: ActionType.CHANGE_CALENDAR_VIEW,
  payload: view,
});
