import classes from "../assets/Styles/navbar.module.css";

export default function Account() {
  return (
    <div className={classes.loginSingupBox}>
      <div className={classes.iconBox}>
        <span className="material-symbols-outlined">account_circle</span>
      </div>
      <p>
        <a href="singUp.html" className="link">
          Sing Up
        </a>
      </p>
    </div>
  );
}
