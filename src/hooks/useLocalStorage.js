import { useState } from "react";

export const useLocalStorage = (key) => {
  const [storedValue, setStoredValue] = useState(() => {
    // if(window.localStorage.getItem(key)) {
    //     return JSON.parse(window.localStorage.getItem(key));
    // }
    // window.localStorage.setItem(key, JSON.stringify(initialValue));
    // return initialValue;
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : key;
  });

  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
};
