# React Context API in UI tests

This is a test project on how to "configure" React Context API when running UI
unit tests using `testing-library`. Eg. when the context state changes during
the test, the UI test will also "see" the new state.

You can ignore the actual app that runs, it is just a default CRA thing with
the Context Provider added to it for the tests. The main beef of this repo
is **App.tsx**, **MyContext.tsx**, and obviously **App.test.tsx**.

## Available Scripts

In the project directory, you can run:

### `npm test`

Launches the test runner in the interactive watch mode.
