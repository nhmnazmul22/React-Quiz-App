import classes from "../assets/Styles/Answers.module.css";
import Checkbox from "./Checkbox";
export default function Answers() {
  return (
    <div className="row">
      <div className="colum">
        <div className={classes.answersBox}>
          <Checkbox className={classes.checkbox} text="A New Hope 1" />
          <Checkbox className={classes.checkbox} text="A New Hope 1" />
          <Checkbox className={classes.checkbox} text="A New Hope 1" />
          <Checkbox className={classes.checkbox} text="A New Hope 1" />
          <Checkbox className={classes.checkbox} text="A New Hope 1" />
        </div>
      </div>
      <div className="colum">
        <div className={classes.answersBox}>
          <Checkbox className={classes.checkbox} text="A New Hope 1" />
          <Checkbox className={classes.checkbox} text="A New Hope 1" />
          <Checkbox className={classes.checkbox} text="A New Hope 1" />
          <Checkbox className={classes.checkbox} text="A New Hope 1" />
          <Checkbox className={classes.checkbox} text="A New Hope 1" />
        </div>
      </div>
    </div>
  );
}
