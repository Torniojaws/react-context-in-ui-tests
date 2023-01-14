import { createContext, ReactElement, useContext, useState } from "react";
import { MyContextParams, MyContextType } from "./types/context";

// Setup context with default data
export const MyContext = createContext<MyContextType>({
  user: "Default User",
  setUser: () => {},
});

// Exported to be wrapped around a root-level component (but inside <App />)
export const MyContextProvider = ({
  children,
}: MyContextParams): ReactElement => {
  const [user, setUser] = useState<string>("");

  return (
    <MyContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

// Whenever you want to access the context values, or update one, you import
// this function to your implementation and call it like useMyContext().user
// or useMyContext().setUser(value) to update the context.
export const useMyContext = (): MyContextType => useContext(MyContext);
