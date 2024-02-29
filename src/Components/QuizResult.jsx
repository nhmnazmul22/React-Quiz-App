import classes from "../assets/Styles/QuizResult.module.css";
import AnswersAnalysis from "./AnswersAnalysis";
export default function QuizResult() {
  return (
    <div className="quizResult">
      <div className={classes.titleBox}>
        <h2>Question Analytics</h2>
        <p>You answered 5 out of 10 question correctly</p>
      </div>
      <AnswersAnalysis />
    </div>
  );
}
