function getThisWeek() {
  const thisWeekdays = [];
  const now = Date.now();
  const DAY = 60 * 60 * 24 * 1000;
  const today = new Date(now).getDay();

  for (let i = today; i >= 0; i--) {
    const date = new Date(now - DAY * i);
    thisWeekdays.push(date);
  }
  for (let i = 1; i < 7 - today; i++) {
    const date = new Date(now + DAY * i);
    thisWeekdays.push(date);
  }

  return thisWeekdays;
}

export default getThisWeek;
