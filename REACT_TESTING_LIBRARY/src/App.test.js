import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App.js", () => {
  test("using getBy", () => {
    render(<App />);
    const linkElement = screen.getByText("Title"); // returns the Error
    expect(linkElement).toBeInTheDocument();
  });

  test("using queryBy", () => {
    render(<App />);
    const linkElement = screen.queryByText("Title"); // returns NULL
    expect(linkElement).toBeInTheDocument();
  });

  test("using findBy", async () => {
    render(<App />);
    const linkElement = await screen.findByText("Title"); // use Async / Await
    //console.log(linkElement);
    expect(linkElement).toBeInTheDocument();
  });

  // basic diff done, now different query methods

  test("Other query methods", () => {
    render(<App />);
    const linkElement = screen.queryByText("tle", { exact: false });
    expect(linkElement).toBeInTheDocument();
  });

  test("label & placeholder - M.IMP", () => {
    render(<App />);

    // -------- for Label --------
    const linkElement = screen.queryByLabelText("Username");
    expect(linkElement).toBeInTheDocument();

    // -------- for placeholder --------
    const linkElement2 = screen.queryByPlaceholderText("Enter Name");
    expect(linkElement2).toBeInTheDocument();
  });

  test("Role - button / heading / paragraph etc...", () => {
    render(<App />);

    // find the tag present or not
    const linkElement = screen.queryByRole("button");
    expect(linkElement).toBeInTheDocument();

    // tag + innerText
    const linkElement2 = screen.queryByRole("button", {
      name: "Button Component",
    });
    expect(linkElement2).toBeInTheDocument();

    // multiple tag like 2 headings - check length of it
    const linkElement3 = screen.queryAllByRole("heading");
    expect(linkElement3.length).toBe(2);

    // multiple tag present but wants to detect specific one
    const linkElement4 = screen.queryByRole("heading", { name: "Title" });
    expect(linkElement4).toBeInTheDocument();
  });

  test('find by "test-id" (find by id)', () => {
    render(<App />);

    // check id present
    const linkElement = screen.queryByTestId("h2-tag-title");
    expect(linkElement).toBeInTheDocument();

    // check id should not be present
    const linkElement2 = screen.queryByTestId("xxxx-tag-title");

    expect(linkElement2).not.toBeInTheDocument();
    // ---------  OR ---------------
    expect(linkElement2).toBeNull(); // main method
    // because query always returns null if not find it, so using toBeNull will be useful here
  });

  // checking "queryByAll"
  test("queryByAll", () => {
    render(<App />);
    
    // multiple tag like 2 headings - check length of it
    const linkElement3 = screen.queryAllByRole("heading");
    expect(linkElement3.length).toBe(2);

    // multiple tag present but wants to detect specific one
    const linkElement4 = screen.queryByRole("heading", { name: "Title" });
    expect(linkElement4).toBeInTheDocument();
  });
});
