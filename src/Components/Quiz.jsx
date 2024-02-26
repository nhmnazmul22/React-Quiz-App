import img from "../assets/Img/Quiz-banners/1.png";
import classes from "../assets/Styles/Quiz.module.css";

export default function Quiz() {
  return (
    <div className="colum">
      <div className={classes.quizBox}>
        <div className={classes.banner}>
          <a href="./quiz.html">
            <img src={img} alt="Quiz 01" />
          </a>
        </div>
        <div className={classes.quizContent}>
          <div className={classes.quizTitle}>
            <h3>
              <a href="#" className="tag">
                #1
              </a>{" "}
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
