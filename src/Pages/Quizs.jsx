import Quiz from "../Components/Quiz";

export default function Quizs() {
  return (
    <div className="quizContainer">
      <h2 className="main-title">React Quiz</h2>
      <div className="row">
        <Quiz />
        <Quiz />
        <Quiz />
        <Quiz />
        <Quiz />
        <Quiz />
        <Quiz />
        <Quiz />
      </div>
    </div>
  );
}
