import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export const useSetInterval = ({ callback, interval = 1000, finished }) => {
  const intervalRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);

  const start = () => {
    intervalRef.current = setInterval(callback, interval);
    setIsRunning(true);
  };

  const stop = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    setIsRunning(false);
  };

  const restart = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  // if (finished) {
  //   console.log("Hola")
  //   clearInterval(intervalRef.current);
  //   intervalRef.current = null;
  // }

  useEffect(() => {
    return function () {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return { intervalRef, isRunning, start, stop, restart };
};
