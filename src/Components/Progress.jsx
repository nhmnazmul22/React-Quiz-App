import classes from "../assets/Styles/Progress.module.css";

export default function Progress({
  nextQuestion,
  pervQuestion,
  submit,
  progress,
}) {
  return (
    <div className={classes.progressBox}>
      <div className={classes.buttonBox}>
        <button type="button" className={classes.btn} onClick={pervQuestion}>
          <a>Prvious Quesion</a>
        </button>
      </div>
      <div className={classes.progressBar}>
        <div className={classes.progress} style={{ width: `${progress}%` }}>
          <div className={classes.toolTip}>{progress}% Completing</div>
        </div>
      </div>
      <div className={classes.buttonBox}>
        <button
          type="button"
          className={classes.btn}
          onClick={progress === 100 ? submit : nextQuestion}
        >
          <a>Next Question</a>
        </button>
      </div>
    </div>
  );
}
