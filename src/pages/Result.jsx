import { useContext } from "react";
import { contextProvider } from "../provider/Provider";
import { Navigate, useNavigate } from "react-router-dom";
const Result = () => {
  const { points, setPoints } = useContext(contextProvider);
  const percentage = parseInt((points / 125) * 100);
  const navigate = useNavigate();

  const quizAgainHandler = () => {
    navigate("/quiz");
    setPoints(0);
  };

  return (
    <>
      {points === 0 ? (
        <Navigate to="/quiz"></Navigate>
      ) : (
        <div className="max-w-screen-xl mx-auto px-5">
          <dialog id="my_modal_1" className="modal modal-open">
            <div className="modal-box place-items-center">
              <div
                className={`h-32 w-32 rounded-full flex items-center justify-center 
               ${
                 percentage <= 40
                   ? "bg-gradient-to-tr from-red-500 to-red-200"
                   : percentage <= 70
                   ? "bg-gradient-to-tr from-orange-500 to-orange-200 text-white"
                   : percentage <= 90
                   ? "bg-gradient-to-tr from-green-500 to-emerald-200 text-white"
                   : "bg-gradient-to-tr from-violet-500 to-violet-200 text-white"
               }`}
              >
                <span className="text-4xl font-bold text-white">
                  {percentage}%
                </span>
              </div>
              <div className="mt-6">
                {percentage <= 40 ? (
                  <h3 className="text-xl font-bold text-red-500">
                    Stressed-out Steve!
                  </h3>
                ) : percentage <= 70 ? (
                  <h3 className="text-xl font-bold text-orange-500">
                    Moderately Chill Mike!
                  </h3>
                ) : percentage <= 90 ? (
                  <h3 className="text-xl font-bold text-green-400">
                    Almost Chill Champ!
                  </h3>
                ) : (
                  <h3 className="text-xl font-bold text-primary">
                    Ultimate Chill Guy!
                  </h3>
                )}
              </div>
              <div className="py-4 text-center">
                {percentage <= 40 ? (
                  <p className="text-base font-normal text-base-content">
                    You’re a bit too high-strung. Maybe try yoga or deep
                    breathing!
                  </p>
                ) : percentage <= 70 ? (
                  <p className="text-base font-normal text-base-content">
                    Not bad! You’ve got some chill vibes but could relax more in
                    tough situations.
                  </p>
                ) : percentage <= 90 ? (
                  <p className="text-base font-normal text-base-content">
                    You’re super chill! Almost a role model for the Chill Guy
                    philosophy.
                  </p>
                ) : (
                  <p className="text-base font-normal text-base-content">
                    Congratulations, you’re the Ultimate Chill Guy! Nothing
                    fazes you!
                  </p>
                )}
              </div>
              <div className="modal-action">
                <form method="dialog">
                  <button onClick={quizAgainHandler} className="btn">
                    Take the quiz again!
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      )}
    </>
  );
};

export default Result;
