import { useState, useEffect, useRef } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setError(null);
        setData(json);
      } catch {
        setError("Error: could not fetch url");
      }
    };
    loaded.current = true;
    fetchData();
  }, []);

  return { data, error };
}
