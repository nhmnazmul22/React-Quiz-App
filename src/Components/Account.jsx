import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import classes from "../assets/Styles/navbar.module.css";
export default function Account() {
  const { currentUser, logout } = useAuth();

  return (
    <div className={classes.loginSingupBox}>
      {currentUser ? (
        <>
          <div className="iconBox">
            <span className="material-symbols-outlined">account_circle</span>
          </div>
          <p className="user">{currentUser.displayName}</p>
          <span className="material-symbols-outlined" onClick={logout}>
            logout
          </span>
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}
