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
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" y1="12" x2="9" y2="12" />
      </svg>
    </React.Fragment>
  );
}

export default Unshare;
