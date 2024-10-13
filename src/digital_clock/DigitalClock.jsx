import React from "react";
import { useState } from "react";
import Digit from "./Digit";
import Colon from "./Colon";
import "./digitclock.css";

function DigitalClock() {
  const [time, setTime] = useState({ hour: 0, minute: 0, second: 0 });
  setTimeout(() => {
    const newTime = new Date();
    const second = newTime.getSeconds();
    const minute = newTime.getMinutes();
    const hour = newTime.getHours();
    setTime({ hour: hour, minute: minute, second: second });
  }, 1000);
  return (
    <>
      <h1>Digital Clock</h1>
      <div className="clock-container">
        <Digit digit={Math.floor(time.hour / 10)} />
        <Digit digit={Math.floor(time.hour % 10)} />
        <Colon />
        <Digit digit={Math.floor(time.minute / 10)} />
        <Digit digit={Math.floor(time.minute % 10)} />
        <Colon />
        <Digit digit={Math.floor(time.second / 10)} />
        <Digit digit={Math.floor(time.second % 10)} />
      </div>
    </>
  );
}

export default DigitalClock;
