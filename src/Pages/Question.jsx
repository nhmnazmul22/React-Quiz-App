import { getDatabase, ref, set } from "firebase/database";
import _ from "lodash";
import { useEffect, useReducer, useState } from "react";
import { useNavigation, useParams } from "react-router-dom";
import Answers from "../Components/Answers";
import Progress from "../Components/Progress";
import { useAuth } from "../Context/AuthContext";
import classes from "../assets/Styles/Question.module.css";
import useQuestion from "../hook/useQuestion";

const intialstate = null;
const reducer = (state, action) => {
  switch (action.type) {
    case "question":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;
    case "answers":
      const question = _.cloneDeep(state);
      question[action.questionId].options[action.optionIndex].checked =
        action.value;

      return question;
    default:
      return state;
  }
};

export default function Question() {
  const { id } = useParams();
  const { loading, error, questions } = useQuestion(id);
  const [currentQustion, setCurrentQuestion] = useState(0);
  const [qna, dispatch] = useReducer(reducer, intialstate);
  const { currentUser } = useAuth();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch({
      type: "question",
      value: questions,
    });
  }, [questions]);

  const handleChange = (e, index) => {
    dispatch({
      type: "answers",
      questionId: currentQustion,
      optionIndex: index,
      value: e.target.checked,
    });
  };

  // function for next question
  const nextQuestion = () => {
    if (currentQustion + 1 < questions.length) {
      setCurrentQuestion((pervQuestion) => pervQuestion + 1);
    }
  };
  // Function for perv question
  const pervQuestion = () => {
    if (currentQustion >= 1 && currentQustion <= questions.length) {
      setCurrentQuestion((pervQuestion) => pervQuestion - 1);
    }
  };
  // Submit funtion
  const submit = async () => {
    const { uid } = currentUser;
    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);

    await set(resultRef, {
      [id]: qna,
    });
    console.log(navigation);
  };
  const persentage =
    questions.length > 0 ? ((currentQustion + 1) / questions.length) * 100 : 0;

  return (
    <>
      {error && <p className="error">Something Went Wrong!</p>}
      {!error && loading && <p className="loading">Loading...</p>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <div className={classes.questions}>
            <div className={classes.titleBox}>
              <h2>{qna[currentQustion].title}</h2>
              <p>Question can have multiple Answers</p>
            </div>
            <Answers
              options={qna[currentQustion].options}
              handleChange={handleChange}
            />
            <Progress
              nextQuestion={nextQuestion}
              pervQuestion={pervQuestion}
              submit={submit}
              progress={persentage}
            />
          </div>
        </>
      )}
    </>
  );
}
