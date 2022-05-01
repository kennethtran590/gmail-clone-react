import React from "react";
import "./Section.css";

function Section({ Icon, title, color, selected }) {
  const sectionStyle = {
    borderBottom: `3px solid ${color}`,
    color: `${selected && color}`,
  };

  return (
    <div
      style={sectionStyle}
      className={`section ${selected && "section--selected"}`}
    >
      <Icon />
      <h4>{title}</h4>
    </div>
  );
}

export default Section;
