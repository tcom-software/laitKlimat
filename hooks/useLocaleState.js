import { useState, useEffect } from "react";
import { setCookie } from "utils/cookies";

// site locale storage keys
export const localKeys = {
  CATEGORIES: "site::categories",
};

export const useLocalState = (key, initial) => {
  const [value, setValue] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem(key);
      if (saved !== null) {
        return JSON.parse(saved);
      }
    }
    
    return initial;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
    setCookie(key, true, 1);
  }, [value]);

  return [value, setValue];
};
