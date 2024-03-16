import { useState } from "react";
import { Link } from "react-router-dom";
import Quiz from "../Components/Quiz";
import useQuizList from "../hook/useQuizList";
export default function Quizs() {
  const [page, setPage] = useState(1);
  const { loading, error, quizs } = useQuizList(page);
  return (
    <div className="quizContainer">
      <h2 className="main-title">React Quiz</h2>
      <div className="row">
        {quizs.length > 0 &&
          quizs.map((quiz) => {
            return quiz.noq > 0 ? (
              <Link to={`/quiz/${quiz.quizID}`} key={quiz.quizID}>
                <Quiz title={quiz.title} noq={quiz.noq} />
              </Link>
            ) : (
              <div key={quiz.quizID}>
                <Quiz title={quiz.title} noq={quiz.noq} />
              </div>
            );
          })}
        {!loading && quizs.length === 0 && (
          <p className="error">No Data Found!</p>
        )}
      </div>
      {error && <p className="error">Something Went Wrong!</p>}
      {loading && <p className="loading">Loading...</p>}
    </div>
  );
}
