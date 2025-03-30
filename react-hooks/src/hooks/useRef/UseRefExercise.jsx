import { useEffect, useRef, useState } from "react";

const UseRefExercise = () => {
  const [time, setTime] = useState(0);
  const [isStop, setIsStop] = useState(false);
  const timerRef = useRef(null);
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);
  return (
    <>
      <h1>Timer: {time} seconds</h1>
      <button
        onClick={() => {
          if (isStop) {
            timerRef.current = setInterval(
              () => setTime((prev) => prev + 1),
              1000
            );
          } else {
            clearInterval(timerRef.current);
          }
          setIsStop((prev) => !prev);
        }}
      >
        {isStop ? "Start" : "Stop"} Timer
      </button>
      <button
        onClick={() => {
          clearInterval(timerRef.current);
          setTime(0);
        }}
      >
        Reset Timer
      </button>
    </>
  );
};

export default UseRefExercise;
