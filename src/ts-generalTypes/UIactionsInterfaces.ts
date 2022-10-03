import { ActionType } from '../redux/ActionTypesConstants';

export interface openEventCreatorWindowAction {
  type: ActionType.OPEN_EVENT_CREATOR_WINDOW;
}

export interface closeEventCreatorWindowAction {
  type: ActionType.CLOSE_EVENT_CREATOR_WINDOW;
}

export interface openEventModalPopupAction {
  type: ActionType.OPEN_EVENT_MODAL_POPUP;
  payload: boolean;
}

export interface closeEventModalPopupAction {
  type: ActionType.CLOSE_EVENT_MODAL_POPUP;
}

export interface setMouseCoordinatesAction {
  type: ActionType.SET_MOUSE_COORDINATES;
  payload: { x: number; y: number };
}

export interface editCalendarEvent {
  type: ActionType.EDIT_CALENDAR_EVENT;
}

export interface showLoginWindow {
  type: ActionType.SHOW_LOGIN_WINDOW;
}

export interface hideLoginWindow {
  type: ActionType.HIDE_LOGIN_WINDOW;
}

export interface changeCalendarView {
  type: ActionType.CHANGE_CALENDAR_VIEW;
  payload: string;
}

export type UIAction =
  | openEventCreatorWindowAction
  | closeEventCreatorWindowAction
  | openEventModalPopupAction
  | closeEventModalPopupAction
  | setMouseCoordinatesAction
  | editCalendarEvent
  | showLoginWindow
  | changeCalendarView
  | hideLoginWindow;
