import { useState } from "react";

const QuizCard = ({ currentQuizId, data, setGetPoints, index }) => {
  const filteredQuiz = data.filter((quiz) => currentQuizId === quiz.id);
  const { prompt, choices } = filteredQuiz[0];
  const [active, setActive] = useState(null);

  const choice0 = () => {
    setActive(choices[0]);
    setGetPoints(choices[0].points);
  };
  const choice1 = () => {
    setActive(choices[1]);
    setGetPoints(choices[1].points);
  };
  const choice2 = () => {
    setActive(choices[2]);
    setGetPoints(choices[2].points);
  };
  const choice3 = () => {
    setActive(choices[3]);
    setGetPoints(choices[3].points);
  };

  return (
    <>
      <div className="pt-12">
        <h2 className="text-xl font-medium text-base-content-secondary">
          {index + 1}. {prompt}
        </h2>
        <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-2">
          <button
            onClick={choice0}
            className={`btn btn-lg px-6 h-auto py-4 rounded-xl border border-primary bg-primary/5 text-base font-normal text-left hover:bg-primary hover:text-primary-content md:text-lg ${
              active === choices[0]
                ? "bg-primary2 text-primary-content"
                : "bg-primary/5 text-base-content"
            }`}
          >
            {choices[0].text}
          </button>
          <button
            onClick={choice1}
            className={`btn btn-lg px-6 h-auto py-4 rounded-xl border border-primary bg-primary/5 text-base font-normal text-left hover:bg-primary hover:text-primary-content md:text-lg ${
              active === choices[1]
                ? "bg-primary2 text-primary-content"
                : "bg-primary/5 text-base-content"
            }`}
          >
            {choices[1].text}
          </button>
          <button
            onClick={choice2}
            className={`btn btn-lg px-6 h-auto py-4 rounded-xl border border-primary bg-primary/5 text-base font-normal text-left hover:bg-primary hover:text-primary-content md:text-lg ${
              active === choices[2]
                ? "bg-primary2 text-primary-content"
                : "bg-primary/5 text-base-content"
            }`}
          >
            {choices[2].text}
          </button>
          <button
            onClick={choice3}
            className={`btn btn-lg px-6 h-auto py-4 rounded-xl border border-primary bg-primary/5 text-base font-normal text-left hover:bg-primary hover:text-primary-content md:text-lg ${
              active === choices[3]
                ? "bg-primary2 text-primary-content"
                : "bg-primary/5 text-base-content"
            }`}
          >
            {choices[3].text}
          </button>
        </div>
      </div>
    </>
  );
};

export default QuizCard;
