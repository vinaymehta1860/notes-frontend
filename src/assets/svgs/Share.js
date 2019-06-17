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

function Share() {
  return (
    <React.Fragment>
      <svg xmlns="http://www.w3.org/2000/svg" style={style}>
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
        <polyline points="16 6 12 2 8 6" />
        <line x1="12" y1="2" x2="12" y2="15" />
      </svg>
    </React.Fragment>
  );
}

export default Share;
