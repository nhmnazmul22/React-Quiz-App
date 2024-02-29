import classes from "../assets/Styles/Question.module.css";
import Answers from "../Components/Answers";
import Progress from "../Components/Progress";
export default function Question() {
  return (
    <div className={classes.questions}>
      <div className={classes.titleBox}>
        <h2>Pick Three of your favorite Star Wars Films</h2>
        <p>Question can have multiple Answers</p>
      </div>
      <Answers />
      <Progress />
    </div>
  );
}
