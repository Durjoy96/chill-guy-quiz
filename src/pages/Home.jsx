import { Link } from "react-router-dom";
import ChillGuy from "../assets/chill-guy.png";
import { FaPlay } from "react-icons/fa";

const Home = () => {
  return (
    <div className="grid place-items-center pt-32">
      <div className="h-80">
        <img
          className="h-full hover:animate-spin"
          src={ChillGuy}
          alt="Chill Guy"
        />
      </div>
      <div className="mt-12">
        <Link
          to={`../quiz`}
          className="btn animate-pulse px-12 h-auto py-4 border-none bg-gradient-to-r from-primary to-secondary text-primary-content text-xl font-bold rounded-full hover:shadow-2xl hover:shadow-secondary hover:opacity-90"
        >
          <FaPlay className="w-4 h-4"></FaPlay> Play Quiz
        </Link>
      </div>
    </div>
  );
};

export default Home;
