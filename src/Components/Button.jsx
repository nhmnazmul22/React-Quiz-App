import { Link } from "react-router-dom";
export default function Button({ text }) {
  return (
    <div className="btnBox">
      <Link to="/" className="btn">
        {text}
      </Link>
    </div>
  );
}
