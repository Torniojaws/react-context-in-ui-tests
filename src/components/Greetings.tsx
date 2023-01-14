import { useEffect } from "react";
import { useMyContext } from "../MyContext";

export const Greetings = () => {
  const user = useMyContext().user;
  const updateUser = useMyContext().setUser;
  useEffect(() => {
    console.log("user updated to", user);
  }, [user]);
  return (
    <div>
      <p>Greetings, {user}</p>
      <button onClick={() => updateUser("A New User")}>Change user</button>
    </div>
  );
};
