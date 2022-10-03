import { ActionType } from "../redux/ActionTypesConstants";
import { CalendarEventData } from "./InitialStateInterfaces";

export interface createEventAction {
	type: ActionType.CREATE_NEW_CALENDAR_EVENT;
	payload: CalendarEventData;
}

export interface pageOnLoadAction {
	type: ActionType.PAGE_WAS_LOADED;
}

export interface deleteEventAction {
	type: ActionType.DELETE_CALENDAR_EVENT;
	payload: string;
}

export interface setTodayAction {
	type: ActionType.SET_DATE_TO_TODAY;
}

export interface monthReverseAction {
	type: ActionType.SWITCH_TO_A_MONTH_AGO;
	payload: number;
}

export interface monthForwardAction {
	type: ActionType.SWITCH_TO_ONE_MONTH_FORWARD;
	payload: number;
}
export interface setSelectedDateAction {
	type: ActionType.SET_SELECTED_DATE;
	payload: string;
}

export interface minusOneDayAction {
	type: ActionType.SWITCH_TO_A_MINUS_ONE_DAY;
	payload: number;
}
export interface plusOneDayForwardAction {
	type: ActionType.SWITCH_TO_A_ONE_DAY_FORWARD;
	payload: number;
}

export interface dayComponentWasLoadedAction {
	type: ActionType.DAY_COMPONENT_WAS_LOADED;
}

export interface monthComponentWasLoadedAction {
	type: ActionType.MONTH_COMPONENT_WAS_LOADED;
}

export interface setSelectedEventIdAction {
	type: ActionType.SET_SELECTED_EVENT_ID;
	payload: string;
}
export interface addNewEventToList {
	type: ActionType.ADD_NEW_EVENT_TO_LIST,
	payload: CalendarEventData
}
export interface updateEventData {
	type: ActionType.UPDATE_EVENT_DATA,
	payload: CalendarEventData
}

export type CalendarEventAction =
	| createEventAction
	| pageOnLoadAction
	| deleteEventAction
	| setTodayAction
	| monthReverseAction
	| monthForwardAction
	| setSelectedDateAction
	| minusOneDayAction
	| plusOneDayForwardAction
	| dayComponentWasLoadedAction
	| monthComponentWasLoadedAction
	| setSelectedEventIdAction
	| addNewEventToList
	| updateEventData
