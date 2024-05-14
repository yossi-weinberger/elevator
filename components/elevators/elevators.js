import React, { useState, useEffect } from "react";
import ding from "../../public/ding.mp3";
import "./elevators.css";

export function Elevators({ selectedFloor, setTransitionDuration }) {
  const floorHeight = 117;
  const numElevators = 3;
  const transitionTime = 0.5;

  const [elevators, setElevators] = useState(
    Array.from({ length: numElevators }, (_, i) => ({
      id: i,
      pos: 0,
      duration: 0,
    }))
  );

  useEffect(() => {
    if (selectedFloor !== null) {
      const elevatorAtFloor = elevators.find(
        (elv) => elv.pos === selectedFloor * floorHeight
      );
      if (!elevatorAtFloor) {
        const closest = elevators.reduce((prev, curr) =>
          Math.abs(curr.pos - selectedFloor * floorHeight) <
          Math.abs(prev.pos - selectedFloor * floorHeight)
            ? curr
            : prev
        );
        const duration =
          Math.abs(closest.pos / floorHeight - selectedFloor) * transitionTime;
        setTransitionDuration(duration);
        setElevators((prevElevators) =>
          prevElevators.map((elv) =>
            elv.id === closest.id
              ? { ...elv, pos: selectedFloor * floorHeight, duration }
              : elv
          )
        );
        setTimeout(() => new Audio(ding).play(), duration * 1000);
      }
    }
  }, [selectedFloor, numElevators, setTransitionDuration]);

  const renderElevators = () =>
    elevators.map((elv) => (
      <div
        key={elv.id}
        className="elevator"
        style={{
          transform: `translateY(-${elv.pos}px)`,
          transition: `transform ${elv.duration}s linear`,
        }}
      />
    ));

  return <div className="main-elv">{renderElevators()}</div>;
}
