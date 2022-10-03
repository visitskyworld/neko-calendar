import React from 'react';

export const useTimePicker = (initialValue: any, required: boolean) => {
  const [timeOption, setTimeValue] = React.useState(initialValue);
  const [error, setError] = React.useState<string | null>(null);

  const timeHandler = (item: string) => {
    const hour = new Date(item).getHours();
    const minute = new Date(item).getMinutes();
    if (hour > 12) {
      setTimeValue(
        `${(hour - 12).toString()}${minute < 10 ? '' : ':' + minute} PM`
      );
    } else {
      setTimeValue(`${hour.toString()}${minute < 10 ? '' : ':' + minute} AM`);
    }

    if (item === '' && required) setError('Required field');
    else setError(null);
  };

  return {
    timeOption,
    onSelect: (value: any) => timeHandler(value._d),
    error,
  };
};
