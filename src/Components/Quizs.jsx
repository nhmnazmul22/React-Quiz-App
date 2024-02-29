import { Link } from "react-router-dom";
import Quiz from "./Quiz";

export default function Quizs() {
  return (
    <div className="quizContainer">
      <h2 className="main-title">React Quiz</h2>
      <div className="row">
        <Link to="/quiz">
          <Quiz />
        </Link>
        <Link to="/quiz">
          <Quiz />
        </Link>
        <Link to="/quiz">
          <Quiz />
        </Link>
        <Link to="/quiz">
          <Quiz />
        </Link>
        <Link to="/quiz">
          <Quiz />
        </Link>
        <Link to="/quiz">
          <Quiz />
        </Link>
        <Link to="/quiz">
          <Quiz />
        </Link>
        <Link to="/quiz">
          <Quiz />
        </Link>
      </div>
    </div>
  );
}
