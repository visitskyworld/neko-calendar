import { monthNames, daysStringArr } from './fixtures';

export const getCurrentDate = () => {
  let date: Date = new Date();
  let year: number = date.getFullYear();
  let month: number = date.getMonth();
  let data: number = date.getDate();
  let dayName: number = date.getDay();

  return {
    dayName: daysStringArr[dayName],
    data,
    month: monthNames[month],
    year,
  };
};
