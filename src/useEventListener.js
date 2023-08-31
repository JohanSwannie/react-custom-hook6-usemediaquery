import { useRef, useEffect } from "react";

const useEventListener = (eventType, callback) => {
  alert(callback);
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (event) => callbackRef.current(event);
    window.addEventListener(eventType, handler);
    return () => window.removeEventListener(eventType, handler);
  }, [eventType, window]);
};

export default useEventListener;
