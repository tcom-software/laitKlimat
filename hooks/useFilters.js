import { useState, useEffect } from "react";

export const useFilters = from => {
  const [filters, setFilters] = useState(() => {
    if (typeof window !== "undefined") {
      const filters = window.localStorage.getItem("site::filters");

      if (filters !== null) {
        return JSON.parse(filters);
      }
    }

    return {};
  });

  useEffect(() => {
    window.localStorage.setItem("site::filters", JSON.stringify(filters));
  }, [filters]);

  const addFilters = (_filters = {}) => {
    const newFilters = { ...filters, ..._filters };
    setFilters(newFilters);
  };
  return [filters, addFilters];
};
