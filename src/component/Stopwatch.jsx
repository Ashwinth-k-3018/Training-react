import React, { useState, useEffect } from "react";
import "./Stopwatch.css";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const hours = String(Math.floor(time / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");

  return (
    <div className="stopwatch-container">
      <div className="stopwatch-card">

        <h1>Stopwatch Timer</h1>
        <p>Track your time with precision</p>

        <div className="timer-display">

          <div className="time-box">
            <h2>{hours}</h2>
            <span>Hours</span>
          </div>

          <div className="colon">:</div>

          <div className="time-box">
            <h2>{minutes}</h2>
            <span>Minutes</span>
          </div>

          <div className="colon">:</div>

          <div className="time-box">
            <h2>{seconds}</h2>
            <span>Seconds</span>
          </div>

        </div>

        <div className="button-group">

          <button
            className="start-btn"
            onClick={() => setIsRunning(true)}
            disabled={isRunning}
          >
            Start
          </button>

          <button
            className="stop-btn"
            onClick={() => setIsRunning(false)}
            disabled={!isRunning}
          >
            Stop
          </button>

          <button
            className="reset-btn"
            onClick={handleReset}
          >
            Reset
          </button>

        </div>

      </div>
    </div>
  );
}