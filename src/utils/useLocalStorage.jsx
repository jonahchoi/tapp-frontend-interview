import { useState } from 'react';

//Referenced: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

const useLocalStorage = () => {
  const [storedTheme, setStoredTheme] = useState(() => {
    if (typeof window === "undefined") {
      return 'default';
    }

    let theme = window.localStorage.getItem('theme');

    return theme ? theme : 'default';
  });

  const setTheme = (theme) => {
    setStoredTheme(theme);
    if (typeof window !== "undefined") {
      window.localStorage.setItem('theme', theme);
    }
  }

  return [storedTheme, setTheme];
}

export default useLocalStorage;