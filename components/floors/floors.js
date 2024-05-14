"use client";
import React, { useState, useEffect } from "react";
import "./floors.css";

const TimeScreen = ({ remainingTime }) => (
  <div className="time-screen">
    <p>{remainingTime > 0 ? `${remainingTime} seconds` : ""}</p>
  </div>
);

export function Floors({ onFloorClick, selectedFloor, transitionDuration }) {
  const numFloors = 8;
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    if (transitionDuration > 0) {
      setRemainingTime(transitionDuration);
      const countdownInterval = setInterval(() => {
        setRemainingTime((prevTime) => (prevTime === 0 ? 0 : prevTime - 1));
      }, 1000);
      return () => clearInterval(countdownInterval);
    }
  }, [transitionDuration]);

  const handleFloorClick = (floor) => {
    onFloorClick(floor);
  };

  const renderFloors = () => {
    const floors = [];
    for (let i = numFloors; i >= 0; i--) {
      const [buttonColor, setButtonColor] = useState("silver");
      floors.push(
        <div className="floors" key={i}>
          <TimeScreen remainingTime={i === selectedFloor ? remainingTime : 0} />
          <div className="buttons">
            <button
              type="button"
              style={{ backgroundColor: buttonColor }}
              onClick={() => {
                setButtonColor("lightGreen");
                handleFloorClick(i);
                setTimeout(
                  () => setButtonColor("silver"),
                  transitionDuration * 1000
                );
              }}
            >
              {i}
            </button>
          </div>
        </div>
      );
    }
    return floors;
  };

  return <div>{renderFloors()}</div>;
}
