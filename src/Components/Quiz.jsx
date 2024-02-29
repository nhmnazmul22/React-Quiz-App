import { Link } from "react-router-dom";
import img from "../assets/Img/Quiz-banners/1.png";
import classes from "../assets/Styles/Quiz.module.css";
export default function Quiz() {
  return (
    <div className="colum">
      <div className={classes.quizBox}>
        <div className={classes.banner}>
          <Link to="/quiz">
            <img src={img} alt="Quiz 01" />
          </Link>
        </div>
        <div className={classes.quizContent}>
          <div className={classes.quizTitle}>
            <h3>
              <Link to="/quiz" className="tag">
                #1
              </Link>{" "}
              React App Quiz 01 || Nhm Develop Solution
            </h3>
          </div>
          <div className={classes.qtInfoBox}>
            <p>10 Qustion</p>
            <p>Score: No Taken Yet</p>
          </div>
        </div>
      </div>
    </div>
  );
}
