import { useContext } from "react";
import { MyContext } from "../MyContext";

export const Greetings = () => {
  const myContext = useContext(MyContext);
  return <p>Greetings, {myContext.currentUser}</p>;
};
