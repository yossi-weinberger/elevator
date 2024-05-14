"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { Floors } from "@/components/floors/floors";
import { Elevators } from "@/components/elevators/elevators";

export default function Home() {
  const [floor, setFloor] = useState(null);
  const [duration, setDuration] = useState(0);

  return (
    <div className={styles.container}>
      <div className="screen">
        <Floors
          onFloorClick={setFloor}
          selectedFloor={floor}
          transitionDuration={duration}
        />
        <Elevators selectedFloor={floor} setTransitionDuration={setDuration} />
      </div>
    </div>
  );
}
