import { useEffect, useRef } from "react";

export const useDidUpdate = (func, dep) => {
  const mounted = useRef();

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      func();
    }
  }, dep);
};
