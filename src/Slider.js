import React from "react";

export default function Slider({handleToggleElement}) {
 
  return (
    <div>
      <label className="switch" htmlFor="checkbox">
        <input onClick={handleToggleElement} style={{float:"right",fontSize:"60px"}} type="checkbox" id="checkbox"></input>
        <div className="slider round"></div>
      </label>
    </div>
  );
}
