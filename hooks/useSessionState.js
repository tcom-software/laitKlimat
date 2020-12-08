import { useState, useEffect } from "react";

export const useSessionState = (key, initial) => {
  const [value, setValue] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = window.sessionStorage.getItem(key);
      if (saved !== null) {
        return JSON.parse(saved);
      }
    }

    return initial;
  });

  useEffect(() => {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};
