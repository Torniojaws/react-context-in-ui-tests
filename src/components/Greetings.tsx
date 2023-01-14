import { useEffect } from "react";
import { useMyContext } from "../MyContextProvider";

export const Greetings = () => {
  const user = useMyContext().user;
  useEffect(() => {
    console.warn("User updated to", user);
  }, [user]);
  return <p>Greetings, {user}</p>;
};
