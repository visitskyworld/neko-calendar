import { daysInMonth } from './fixtures';
import { DayType } from '../ts-generalTypes/propTypes';

export const createYearCalendarMatrix = (date: Date) => {
  let year: number = date.getUTCFullYear();
  let month: number = date.getUTCMonth();
  if (month < 0) {
    month = 11;
    year--;
  }
  if (month > 11) {
    month = 0;
    year++;
  }
  let firstDayOfMonth: number = new Date(year, month, 1).getUTCDay();
  let numOfDays: number = daysInMonth[month];

  let counter: number = 1;
  let prevMonth = month - 1 < 0 ? 0 : month - 1;
  let counterAfter: number = 1;
  let counterBefore: number = 1;
  const matrix: DayType[][] = [];

  const today = new Date();
  for (let row = 0; row < 6; row++) {
    matrix.push([]);

    for (let col = 0; col < 7; col++) {
      if (row === 0 && col < firstDayOfMonth) {
        matrix[row][col] = {
          day: daysInMonth[prevMonth] - firstDayOfMonth + counterBefore,
          id: `${year}-${month}-${counterBefore}`,
          cell: true,
        };
        counterBefore++;
      }

      if (row === 0 && col >= firstDayOfMonth) {
        matrix[row][col] = {
          day: counter,
          id: `${year}-${month + 1}-${counter}`,
          cell: true,
          isCurrentMonth: true,
          isToday:
            counter === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear(),
        };
        counter++;
      }

      if (row > 0 && counter <= numOfDays) {
        matrix[row][col] = {
          day: counter,
          id: `${year}-${month + 1}-${counter}`,
          cell: true,
          isCurrentMonth: true,
          isToday:
            counter === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear(),
        };
        counter++;
      } else if (row > 0 && counter > numOfDays) {
        matrix[row][col] = {
          day: counterAfter,
          id: `${year}-${month + 2}-${counterAfter}`,
          cell: true,
        };
        counterAfter++;
      }
    }
  }

  return matrix;
};
