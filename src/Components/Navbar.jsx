import { Link } from "react-router-dom";
import classes from "../assets/Styles/navbar.module.css";
import Account from "./Account";

export default function Navbar() {
  return (
    <div className={classes.navContent}>
      <div className={classes.logo}>
        <h1>
          <Link to="/">
            <span>React</span> Quiz App
          </Link>
        </h1>
      </div>
      <Account />
    </div>
  );
}
