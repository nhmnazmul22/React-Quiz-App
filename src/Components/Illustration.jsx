import img from "../assets/Img/sing-up.svg";
import classes from "../assets/Styles/Illustration.module.css";

export default function Illustration() {
  return (
    <div className={classes.IllustrationBox}>
      <img src={img} alt="Sing Up" />
    </div>
  );
}
