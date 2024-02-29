import classes from "../assets/Styles/AnswersAnalysis.module.css";
import Answers from "./Answers";

export default function AnswersAnalysis() {
  return (
    <div className={classes.answersContainer}>
      <div className={classes.question}>
        <div className={classes.iconBox}>
          <span className="material-symbols-outlined">question_mark</span>
        </div>
        <p>What is JavaScript?</p>
      </div>
      <Answers />
    </div>
  );
}
