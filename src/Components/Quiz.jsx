import img from "../assets/Img/Quiz-banners/1.png";
import classes from "../assets/Styles/Quiz.module.css";

export default function Quiz({ title, noq }) {
  return (
    <div className="colum">
      <div className={classes.quizBox}>
        <div className={classes.banner}>
          <div>
            <img src={img} alt={title} />
          </div>
        </div>
        <div className={classes.quizContent}>
          <div className={classes.quizTitle}>
            <h3>{title}</h3>
          </div>
          <div className={classes.qtInfoBox}>
            <p>{noq} Qustion</p>
            <p>Total Marks: {noq * 5}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
