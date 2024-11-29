import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { contextProvider } from "../provider/Provider";

const Quiz = () => {
  const data = useLoaderData();
  const { quizzesId } = useContext(contextProvider);
  console.log(quizzesId);
  return <div>{quizzesId}</div>;
};

export default Quiz;
