import img from "../assets/Img/complete_quiz.svg";
import classes from "../assets/Styles/QuizScore.module.css";

export default function QuizScore() {
  return (
    <div className="quiz-score">
      <div className="row">
        <div className="colum">
          <div className={classes.scoreBox}>
            <h3>
              Your Score is <br /> 5 out of 10
            </h3>
          </div>
        </div>
        <div className="colum">
          <div className={classes.illustrationBox}>
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
