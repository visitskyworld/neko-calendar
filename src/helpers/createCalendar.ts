import { daysInMonth } from './fixtures';
import { DayType } from '../ts-generalTypes/propTypes';

let year: number = new Date().getFullYear();
let month: number = new Date().getMonth();

export const createCalendarMatrix = (
  date = new Date(),
  monthChange = 0,
  defaultMonth?: number,
  defaultYear?: number
): DayType[][] => {
  month = month + monthChange;
  if (defaultMonth) {
    month = defaultMonth;
  }
  if (defaultYear) {
    year = defaultYear;
  }
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

  for (let row = 0; row < 6; row++) {
    matrix.push([]);

    for (let col = 0; col < 7; col++) {
      if (row === 0 && col < firstDayOfMonth) {
        matrix[row][col] = {
          day: daysInMonth[prevMonth] - firstDayOfMonth + counterBefore,
          id: `${year}-${month}-${
            daysInMonth[prevMonth] - firstDayOfMonth + counterBefore
          }`,
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
            counter === date.getDate() &&
            month === date.getMonth() &&
            year === date.getFullYear(),
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
            counter === date.getDate() &&
            month === date.getMonth() &&
            year === date.getFullYear(),
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
