import { PROJECT_ID } from "constants/api";
import { useState, useEffect } from "react";

export const useFetch = (url = "", options = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    setLoading(true);

    fetch(url, {
      ...(options || {}),
      headers: { ...((options || {}).headers || {}), projectId: PROJECT_ID },
    })
      .then(res => res.json())
      .then(data => {
        if (isMounted) {
          setData(data);
          setError(null);
        }
      })
      .catch(error => {
        if (isMounted) {
          setError(error);
          setData(null);
        }
      })
      .finally(() => isMounted && setLoading(false));

    return () => (isMounted = false);
  }, [url, options]);

  return { loading, error, data };
};
