import classes from "../assets/Styles/navbar.module.css";
import Account from "./Account";

export default function Navbar() {
  return (
    <div className={classes.navContent}>
      <div className={classes.logo}>
        <h1>
          <a href="index.html">
            <span>React</span> Quiz App
          </a>
        </h1>
      </div>
      <Account />
    </div>
  );
}
