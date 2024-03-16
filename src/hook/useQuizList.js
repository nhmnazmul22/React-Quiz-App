import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useQuizList(page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [quizs, setQuizs] = useState([]);
  useEffect(() => {
    async function fatchQuizs() {
      // Fatch the Quizs in firebase
      const db = getDatabase();
      const quizRef = ref(db, "quiz");
      const vedioQuery = query(quizRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        // request for the data
        const snapshot = await get(vedioQuery);
        if (snapshot.exists()) {
          setLoading(false);
          setQuizs(snapshot.val());
        } else {
          setQuizs([]);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    fatchQuizs();
  }, [page]);
  return {
    loading,
    error,
    quizs,
  };
}
