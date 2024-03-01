import img from "../assets/Img/Quiz-banners/1.png";
import classes from "../assets/Styles/Quiz.module.css";
export default function Quiz() {
  return (
    <div className="colum">
      <div className={classes.quizBox}>
        <div className={classes.banner}>
          <div>
            <img src={img} alt="Quiz 01" />
          </div>
        </div>
        <div className={classes.quizContent}>
          <div className={classes.quizTitle}>
            <h3>
              <span className="tag">#1</span> React App Quiz 01 || Nhm Develop
              Solution
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
