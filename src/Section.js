import React from "react";
import "./Section.css";

function Section({ Icon, title, color, selected }) {
  const divStyle = {
    borderBottom: `3px solid ${color}`,
    color: `${selected && color}`,
  };

  return (
    <div style={divStyle} className="section">
      <Icon />
      <h4>{title}</h4>
    </div>
  );
}

export default Section;
