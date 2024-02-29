import classes from "../assets/Styles/Illustration.module.css";

export default function Illustration({img}) {
  return (
    <div className={classes.IllustrationBox}>
      <img src={img} alt="Sing Up" />
    </div>
  );
}
