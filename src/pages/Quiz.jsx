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
  const [step1, setStep1] = useState(false);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [step4, setStep4] = useState(false);
  const [step5, setStep5] = useState(false);

  const nextBtnHandler = () => {
    if (getPoints === null) {
      toast.error("Select an option to proceed");
      return;
    }
    sumPoints(getPoints);
    setGetPoints(null);
    setIndex((preIndex) => {
      const newIndex = preIndex + 1;
      setCurrentQuizId(quizzesId[newIndex]);
      return newIndex;
    });
    if (index === 0) {
      setStep1(true);
    } else if (index === 1) {
      setStep2(true);
    } else if (index === 2) {
      setStep3(true);
    } else if (index === 3) {
      setStep4(true);
    } else if (index === 4) {
      setStep5(true);
    }
  };
  return (
    <div className="max-w-screen-md mx-auto px-5 pb-8">
      <div className="flex justify-center pt-8 md:pt-12">
        <ul className="steps">
          <li
            data-content={step1 ? "✓" : "1"}
            className={`step ${
              step1 ? "step-primary" : index === 0 && "step-primary"
            }`}
          ></li>
          <li
            data-content={step2 ? "✓" : "2"}
            className={`step ${
              step2 ? "step-primary" : index === 1 && "step-primary"
            }`}
          ></li>
          <li
            data-content={step3 ? "✓" : "3"}
            className={`step ${
              step3 ? "step-primary" : index === 2 && "step-primary"
            }`}
          ></li>
          <li
            data-content={step4 ? "✓" : "4"}
            className={`step ${
              step4 ? "step-primary" : index === 3 && "step-primary"
            }`}
          ></li>
          <li
            data-content={step5 ? "✓" : "5"}
            className={`step ${
              step5 ? "step-primary" : index === 4 && "step-primary"
            }`}
          ></li>
        </ul>
      </div>
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
          className="btn px-8 h-auto py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-content hover:opacity-80"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Quiz;
