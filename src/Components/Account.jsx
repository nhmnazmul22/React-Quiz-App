import { Link } from "react-router-dom";
import classes from "../assets/Styles/navbar.module.css";
export default function Account() {
  return (
    <div className={classes.loginSingupBox}>
      <div className="iconBox">
        <span className="material-symbols-outlined">account_circle</span>
      </div>
      <p>
        <Link to="singUp" className="link">
          Sing Up
        </Link>
      </p>
      <p>
        <Link to="login" className="link">
          Login
        </Link>
      </p>
    </div>
  );
}
