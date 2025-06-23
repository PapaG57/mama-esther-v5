import { Link } from "react-router-dom";
import "../styles/camerounButton.css";

function CamerounButton({ children, to = "#", style = {} }) {
  return (
    <Link to={to} className="about-button" style={style}>
      {children}
    </Link>
  );
}

export default CamerounButton;
