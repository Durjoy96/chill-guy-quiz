import { useState } from "react";

const QuizCard = ({ currentQuizId, data }) => {
  const filteredQuiz = data.filter((quiz) => currentQuizId === quiz.id);
  const { prompt, choices } = filteredQuiz[0];
  const [active, setActive] = useState(null);
  return (
    <>
      <div>
        {currentQuizId}
        <p>{prompt}</p>
        <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-2">
          <button
            onClick={() => setActive(choices[0])}
            className={`btn btn-lg px-6 rounded-xl border border-primary bg-primary/5 text-base font-normal hover:bg-primary hover:text-primary-content md:text-lg ${
              active === choices[0]
                ? "bg-primary text-primary-content"
                : "bg-primary/5 text-base-content"
            }`}
          >
            {choices[0].text}
          </button>
          <button
            onClick={() => setActive(choices[1])}
            className={`btn btn-lg px-6 rounded-xl border border-primary bg-primary/5 text-base font-normal hover:bg-primary hover:text-primary-content md:text-lg ${
              active === choices[1]
                ? "bg-primary text-primary-content"
                : "bg-primary/5 text-base-content"
            }`}
          >
            {choices[1].text}
          </button>
          <button
            onClick={() => setActive(choices[2])}
            className={`btn btn-lg px-6 rounded-xl border border-primary bg-primary/5 text-base font-normal hover:bg-primary hover:text-primary-content md:text-lg ${
              active === choices[2]
                ? "bg-primary text-primary-content"
                : "bg-primary/5 text-base-content"
            }`}
          >
            {choices[2].text}
          </button>
          <button
            onClick={() => setActive(choices[3])}
            className={`btn btn-lg px-6 rounded-xl border border-primary bg-primary/5 text-base font-normal hover:bg-primary hover:text-primary-content md:text-lg ${
              active === choices[3]
                ? "bg-primary text-primary-content"
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
