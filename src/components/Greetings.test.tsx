import { render, screen } from "@testing-library/react";
import { Greetings } from "./Greetings";
import { MyContext } from "../MyContext";

describe("Testing greetings with context", () => {
  it("Displays a default user", () => {
    render(<Greetings />);
    const element = screen.getByText(/Greetings, Default User/i);
    expect(element).toBeInTheDocument();
  });

  it("Displays an updated user after state changes", () => {
    const setUser = () => {};
    const { rerender } = render(
      <MyContext.Provider value={{ user: "Hello There", setUser }}>
        <Greetings />
      </MyContext.Provider>
    );
    const element = screen.getByText(/Greetings, Hello There/i);
    expect(element).toBeInTheDocument();

    // Simulate the state being updated following an async API response
    rerender(
      <MyContext.Provider value={{ user: "General Kenobi", setUser }}>
        <Greetings />
      </MyContext.Provider>
    );
    const updated = screen.getByText(/Greetings, General Kenobi/i);
    expect(updated).toBeInTheDocument();
  });
});
