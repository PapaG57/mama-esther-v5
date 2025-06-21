import React from "react";
import "../styles/camerounButton.css";

function CamerounButton({ children, to = "#", style = {} }) {
  return (
    <a href={to} className="about-button" style={style}>
      {children}
    </a>
  );
}

export default CamerounButton;
