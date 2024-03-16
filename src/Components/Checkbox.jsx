import classes from "../assets/Styles/Checkbox.module.css";

export default function Checkbox({ text, ...rest }) {
  return (
    <label className={classes.checkbox}>
      <input type="checkbox" {...rest} />
      <p>{text}</p>
    </label>
  );
}
