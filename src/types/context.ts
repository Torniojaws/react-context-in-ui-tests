import { ReactElement } from "react";

export interface MyContextType {
  user: string;
  setUser: (user: string) => void;
}

export interface MyContextParams {
  children: ReactElement;
}
