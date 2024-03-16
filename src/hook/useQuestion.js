import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useQuestion(questionId) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [questions, setQuestion] = useState([]);

  useEffect(() => {
    async function fatchQuestion() {
      const db = getDatabase();
      const questionRef = ref(db, `quiestion/${questionId}/questions`);
      const questionQuery = query(questionRef, orderByKey());
      try {
        setError(false);
        setLoading(true);
        //fatch the question
        const snapshot = await get(questionQuery);
        if (snapshot.exists()) {
          setLoading(false);
          setQuestion(snapshot.val());
        } else {
          setQuestion([]);
        }
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(true);
      }
    }
    fatchQuestion();
  }, [questionId]);

  return {
    error,
    loading,
    questions,
  };
}
