export const getLocalStorageData = (key: string) => {
  try {
    const valInStorage: string = window.localStorage.getItem(key)!;
    if (typeof JSON.parse(valInStorage) === 'string') {
      return valInStorage;
    }
    return JSON.parse(valInStorage);
  } catch (err) {}
};

export const setLocalStorageData = (key: string, value: string) => {
  return window.localStorage.setItem(key, value);
};
