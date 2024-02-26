import classes from "../assets/Styles/InputBox.module.css";

export default function InputBox({ icon, ...rest }) {
  return (
    <div className={classes.inputBox}>
      <div className={classes.input}>
        <input {...rest} required />
      </div>
      <div className="iconBox">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
    </div>
  );
}
