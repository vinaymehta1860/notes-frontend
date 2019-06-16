import React from "react";

const style = {
  width: "24px",
  height: "24px",
  fill: "#616161"
};

function RightTick() {
  return (
    <React.Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        version="1.1"
        style={style}
      >
        <g id="surface1">
          <path d="M 19.28125 5.28125 L 9 15.5625 L 4.71875 11.28125 L 3.28125 12.71875 L 8.28125 17.71875 L 9 18.40625 L 9.71875 17.71875 L 20.71875 6.71875 Z " />
        </g>
      </svg>
    </React.Fragment>
  );
}

export default RightTick;