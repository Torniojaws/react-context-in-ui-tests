import { createContext, useContext, useState } from "react";
import { MyContextParams, MyContextType } from "./types/context";

const defaultContext: MyContextType = {
  user: "Default User",
  setUser: () => {},
};

export const MyContext = createContext<MyContextType>(defaultContext);

export const MyContextProvider = ({ children }: MyContextParams) => {
  const [user, setUser] = useState<string>(defaultContext.user);

  return (
    <MyContext.Provider value={{ user, setUser }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = (): MyContextType => useContext(MyContext);
