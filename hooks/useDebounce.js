import { useState, useEffect } from "react";

export function useDebounce(value, delay = 300) {      // ← default 300 ms
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(handler);               // cleanup on change
  }, [value, delay]);                                 // rerun when either changes

  return debouncedValue;
}
