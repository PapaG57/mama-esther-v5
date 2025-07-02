import { Link } from "react-router-dom";
import "../styles/camerounButton.css";

export default function CamerounButton({ children, to, onClick, style = {} }) {
  if (to) {
    return (
      <Link to={to} className="about-button" style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button className="about-button" style={style} onClick={onClick}>
      {children}
    </button>
  );
}
