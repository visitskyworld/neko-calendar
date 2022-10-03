import {CalendarEventData} from './InitialStateInterfaces'

export type DayType = {
	day: number;
	id: string;
	cell: boolean;
	isPrevMonth?: boolean;
	isCurrentMonth?: boolean;
	isNextMonth?: boolean;
	eventsThisDay?: CalendarEventData[];
	isToday?: boolean,
	size?: string,
};



