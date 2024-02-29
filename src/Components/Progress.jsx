import { Link } from "react-router-dom";
import classes from "../assets/Styles/Progress.module.css";

export default function Progress() {
  return (
    <div className={classes.progressBox}>
      <div className={classes.buttonBox}>
        <button type="button" className={classes.btn}>
          <Link to="/quiz">Prvious Quesion</Link>
        </button>
      </div>
      <div className={classes.progressBar}>
        <div className={classes.progress}></div>
      </div>
      <div className={classes.buttonBox}>
        <button type="button" className={classes.btn}>
          <Link to="/result">Next Question</Link>
        </button>
      </div>
    </div>
  );
}
