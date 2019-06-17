import React from "react";

const style = {
  width: "24px",
  height: "24px",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};

function Unshare() {
  return (
    <React.Fragment>
      <svg xmlns="http://www.w3.org/2000/svg" style={style}>
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    </React.Fragment>
  );
}

export default Unshare;
