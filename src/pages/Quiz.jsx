import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { contextProvider } from "../provider/Provider";
import QuizCard from "../components/Quiz/QuizCard";

const Quiz = () => {
  const data = useLoaderData();
  const { quizzesId } = useContext(contextProvider);
  const [index, setIndex] = useState(0);
  const [currentQuizId, setCurrentQuizId] = useState(quizzesId[index]);
  const nextBtnHandler = () => {
    console.log(location);
    setIndex((preIndex) => {
      const newIndex = preIndex + 1;
      setCurrentQuizId(quizzesId[newIndex]);
      return newIndex;
    });
  };
  return (
    <div>
      <QuizCard currentQuizId={currentQuizId} data={data}></QuizCard>
      <button
        onClick={nextBtnHandler}
        className="px-6 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-content"
      >
        Next
      </button>
    </div>
  );
};

export default Quiz;
