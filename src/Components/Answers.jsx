import classes from "../assets/Styles/Answers.module.css";
import Checkbox from "./Checkbox";
export default function Answers({ options, handleChange }) {
  return (
    <div className={`${classes.answersBox}`}>
      <div className={classes.colum}>
        {options.map((option, index) => {
          return (
            <Checkbox
              key={index}
              text={option.title}
              value={index}
              checked={option.checked}
              onChange={(e) => handleChange(e, index)}
            />
          );
        })}
      </div>
    </div>
  );
}
