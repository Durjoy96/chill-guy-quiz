import { createContext, useEffect, useState } from "react";

export const contextProvider = createContext();

const Provider = ({ children }) => {
  const [quizzesId, setQuizzesId] = useState([]);

  useEffect(() => {
    const arr = [];

    while (arr.length < 5) {
      const id = Math.round(Math.random() * 10);
      if (!arr.includes(id) && id !== 0) {
        arr.push(id);
      }
    }

    setQuizzesId(arr);
  }, []);

  const info = {
    quizzesId,
  };
  return (
    <>
      <contextProvider.Provider value={info}>
        {children}
      </contextProvider.Provider>
    </>
  );
};

export default Provider;