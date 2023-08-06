import { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay?: number): T {
  const [debounceValue, setDebauonceValue] = useState<T>(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebauonceValue(value);
    }, delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debounceValue;
}

export default useDebounce;
