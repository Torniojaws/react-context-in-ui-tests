import { createContext } from "react";

export const defaultContext = {
  currentUser: "Current User",
};

export const MyContext = createContext(defaultContext);
