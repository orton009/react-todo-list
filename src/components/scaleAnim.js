import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/styles.css";
import { render } from "react-dom";

function Timer() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timerId = setTimeout(() => {
      setTime(new Date());
    }, 1000);
    return () => clearTimeout(timerId);
  });

  return <div>{time.toISOString()}</div>;
}

function ScaleBox() {
  const [rendered, setRendered] = useState(0);
  console.log("rendering anim again", rendered);
  return (
    <div>
      <Timer />
      <button
        onClick={(_) => {
          console.log("clicked button");
          setRendered(rendered + 1);
        }}
      >
        Render Again
      </button>
      <motion.div
        className="box"
        initial={{ opacity: 0.2, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
      />
    </div>
  );
}

export default ScaleBox;
