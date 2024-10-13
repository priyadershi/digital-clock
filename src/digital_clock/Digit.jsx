import React from "react";

const Digit = ({ digit }) => {
  const styl = [
    {
      digit: 0,
      up: "U L R",
      down: "D L R",
    },
    {
      digit: 1,
      up: "R",
      down: "R",
    },
    {
      digit: 2,
      up: "U R D",
      down: "U L D",
    },
    {
      digit: 3,
      up: "U R D",
      down: "U R D",
    },
    {
      digit: 4,
      up: "L D R",
      down: "U R",
    },
    {
      digit: 5,
      up: "U L D",
      down: "U R D",
    },
    {
      digit: 6,
      up: "U L D",
      down: "R U L D",
    },
    {
      digit: 7,
      up: "U R D",
      down: "U R",
    },
    {
      digit: 8,
      up: "U D R L",
      down: "U D R L",
    },
    {
      digit: 9,
      up: "U D R L",
      down: "U R D",
    },
    {
      digit: 10,
      up: "U D L R",
      down: "U D L R",
    },
  ];

  return (
    <div className="digit">
      <div className={"top-square " + styl[digit].up}></div>
      <div className={"bottom-square " + styl[digit].down}></div>
    </div>
  );
};

export default Digit;
