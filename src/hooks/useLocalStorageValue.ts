import React from 'react';

import { mockedEventData } from '../redux/mocked-data';
import { CalendarEventData } from '../ts-generalTypes/InitialStateInterfaces';

export const useLocalStorageValue = (
  initialValue: boolean | string | CalendarEventData[] = mockedEventData,
  key: string
) => {
  const getDataFromStorage = () => {
    const storage = localStorage.getItem(key);

    if (storage) {
      return JSON.parse(storage);
    }
    return initialValue;
  };

  const [value, setValue] = React.useState(getDataFromStorage);

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};
