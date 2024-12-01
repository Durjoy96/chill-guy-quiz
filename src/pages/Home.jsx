import { Link } from "react-router-dom";
import ChillGuy from "../assets/chill-guy.png";
import { FaPlay } from "react-icons/fa";
import bgImg from "../assets/bg.jpg";

const Home = () => {
  return (
    <div
      className="px-2 grid justify-center items-center bg-cover bg-center h-screen md:pt-20"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="h-64 mt-20 flex items-center flex-col-reverse gap-4 md:gap-0 md:flex-row md:items-start md:justify-center md:h-80 md:mt-10 md:ml-52">
        <img className="h-full" src={ChillGuy} alt="Chill Guy" />
        <div className="chat chat-start">
          <div className="chat-bubble bg-base-300 text-base-content font-medium">
            How Chill Are You? Let’s Find Out!
          </div>
        </div>
      </div>
      <div className="-mt-20 flex justify-center lg:-mt-32">
        <Link
          to={`../quiz`}
          className="btn animate-bounce px-12 h-auto py-4 border-none bg-gradient-to-r from-primary to-secondary text-primary-content text-xl font-bold rounded-full hover:shadow-2xl hover:shadow-secondary hover:animate-none"
        >
          <FaPlay className="w-4 h-4"></FaPlay> Play Quiz
        </Link>
      </div>
    </div>
  );
};

export default Home;
