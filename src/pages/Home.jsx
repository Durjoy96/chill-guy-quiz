import { Link } from "react-router-dom";
import ChillGuy from "../assets/chill-guy.png";

const Home = () => {
  return (
    <div className="grid place-items-center">
      <div className="h-96">
        <img className="h-full" src={ChillGuy} alt="Chill Guy" />
      </div>
      <Link to="../quiz" className="px-8 py-2 bg-violet-500 rounded-full">
        Play Quiz
      </Link>
    </div>
  );
};

export default Home;
