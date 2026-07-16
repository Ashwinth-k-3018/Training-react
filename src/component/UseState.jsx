import React, { useState } from "react";
import "./UseState.css";

export default function UseState() {

  const [counter, setCounter] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className={darkTheme ? "container dark" : "container light"}>

      <div className="card">

        <h1>Counter Application</h1>

        <h3>Current Count</h3>

        <h2>{counter}</h2>

        <div className="button-group">

          <button className="increment" onClick={incrementCounter}>
            Increment
          </button>

          <button className="decrement" onClick={decrementCounter}>
            Decrement
          </button>

        </div>

        <button className="reset" onClick={resetCounter}>
          Reset Counter
        </button>

        <div className="theme-section">

          <p>
            Current Theme :
            <span>
              {darkTheme ? " Dark Mode" : " Light Mode"}
            </span>
          </p>

          <button className="theme" onClick={toggleTheme}>
            {darkTheme
              ? "Switch to Light Theme"
              : "Switch to Dark Theme"}
          </button>

        </div>

      </div>

    </div>
  );
}