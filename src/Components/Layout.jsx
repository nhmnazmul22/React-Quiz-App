import classes from "../assets/Styles/Layout.module.css";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <nav className={classes.navBar}>
        <div className={classes.container}>
          <Navbar />
        </div>
      </nav>
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
    </>
  );
}
