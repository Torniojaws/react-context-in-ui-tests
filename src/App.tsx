import "./App.css";
import { Greetings } from "./components/Greetings";
import { MyContextProvider } from "./MyContext";

export const App = () => {
  return (
    <div className="App">
      <MyContextProvider>
        <Greetings />
      </MyContextProvider>
    </div>
  );
};
