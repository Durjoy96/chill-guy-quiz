import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { contextProvider } from "../provider/Provider";
import QuizCard from "../components/Quiz/QuizCard";
import toast from "react-hot-toast";

const Quiz = () => {
  const data = useLoaderData();
  const { quizzesId, sumPoints } = useContext(contextProvider);

  const [index, setIndex] = useState(0);
  const [currentQuizId, setCurrentQuizId] = useState(quizzesId[index]);
  const [getPoints, setGetPoints] = useState(null);

  const nextBtnHandler = () => {
    if (getPoints === null) {
      toast.error("Select an option to proceed");
      return;
    }
    sumPoints(getPoints);
    Set;
    setGetPoints(null);
    setIndex((preIndex) => {
      const newIndex = preIndex + 1;
      setCurrentQuizId(quizzesId[newIndex]);
      return newIndex;
    });
  };
  return (
    <div className="max-w-screen-md mx-auto">
      <QuizCard
        currentQuizId={currentQuizId}
        data={data}
        setGetPoints={setGetPoints}
        index={index}
      ></QuizCard>
      <div className="text-right mt-8">
        <Link
          to={`${index === quizzesId.length - 1 ? "result" : "/quiz"}`}
          onClick={nextBtnHandler}
          className="px-8 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-content hover:opacity-80"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Quiz;
