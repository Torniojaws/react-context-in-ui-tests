import { render, screen } from "@testing-library/react";
import { Greetings } from "./Greetings";
import { MyContext } from "../MyContextProvider";

describe("Testing greetings with context", () => {
  it("Displays a default user", () => {
    render(<Greetings />);
    const element = screen.getByText(/Greetings, Default User/i);
    expect(element).toBeInTheDocument();
  });

  it("Displays an updated user after state changes", () => {
    const { rerender } = render(<Greetings />);
    const element = screen.getByText(/Greetings, Default User/i);
    expect(element).toBeInTheDocument();

    // Update state and check the screen again
    rerender(
      <MyContext.Provider value={{ user: "Test User", setUser: () => {} }}>
        <Greetings />
      </MyContext.Provider>
    );
    const updated = screen.getByText(/Greetings, Test User/i);
    expect(updated).toBeInTheDocument();
  });
});
