import { render, screen } from "@testing-library/react";
import { App } from "./App";
import { MyContext } from "./MyContext";

describe("App context API tests", () => {
  it("displays default value from user context", () => {
    render(<App />);
    const linkElement = screen.getByText(/Current User/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("displays updated user when context changes", () => {
    // rerender() will be used to check the updated component
    const { rerender } = render(<App />);
    const linkElement = screen.getByText(/Current User/i);
    expect(linkElement).toBeInTheDocument();

    // Update the context
    const newData = { currentUser: "New User" };

    // Check that the updated value is now in the UI
    rerender(
      <MyContext.Provider value={newData}>
        <App />
      </MyContext.Provider>
    );
    const linkElementRerender = screen.getByText(/New User/i);
    expect(linkElementRerender).toBeInTheDocument();
  });

  // Eg. Context exposes its state setter, for example myContext().setMyParam(value)
  // then that change should also reflect in the UI test here.
  // The primary use case would be an initially empty array being populated after an
  // async API call (mocked/intercepted during the UI test).
  it.todo("displays updated data when context changes using a setter");
});
