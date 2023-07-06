import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import User from "./User";

describe("User Page", () => {
  jest.setTimeout(50000);

  it("Disable Button on clicking", () => {
    render(<User />);
    const btn = screen.getByRole("button"); // OR ---> getByRole('button', {name: "Add"})
    fireEvent.click(btn);

    expect(btn).toBeDisabled();
  });

  it("Submit check", () => {
    render(<User />);
    const btn = screen.getByRole("button"); // OR ---> getByRole('button', {name: "Add"})
    fireEvent.click(btn);

    const message = screen.getByTestId("success");

    //expect(message).toHaveTextContent('Adds');     // fail
    expect(message).toHaveTextContent("Add"); // pass (Bcuz substring is also accepted here);
    expect(message).toHaveTextContent("Added"); // pass
  });

  test("Valid User", () => {
    render(<User />);
    const inputValue = screen.getByPlaceholderText("Enter Name");
    fireEvent.change(inputValue, { target: { value: "hello" } });
    const message = screen.getByTestId("success");

    expect(message).toHaveTextContent("");
  });

  test("Invalid user", () => {
    render(<User />);

    const inputValue = screen.getByPlaceholderText("Enter Name");
    fireEvent.change(inputValue, { target: { value: 1254 } });

    const message = screen.getByTestId("success");
    expect(message).toHaveTextContent("Not A Number");
  });

  // waitfor

  it("use waitFor", async () => {
    render(<User />);

    const btn = screen.getByRole("button");
    fireEvent.click(btn);

    //const dataDiv = screen.getByTestId('fetch_data');
    //expect(dataDiv).toHaveTextContent('API Data Fetched') // Never Works with Timeout type Data fetching

    // if API is taking 5 second to fetch data , then use {timeout: 7000} && at the top of describe add "jest.setTimeout(30000)".
    let dataDiv;
    await waitFor(() => (dataDiv = screen.getByTestId("fetch_data")), {
      timeout: 2000,
    });
    expect(dataDiv).toHaveTextContent("API Data Fetched");
  });

  // alternative way of "waitFor" ==> "findBy"
  // can be used in async/await

  test("findBy for async / await", async () => {
    render(<User />);

    const btn = screen.getByRole("button");
    fireEvent.click(btn);

    const dataDiv = await screen.findByTestId(
      "fetch_data",
      {},
      {timeout: 3000}
    );
    expect(dataDiv).toHaveTextContent("API Data Fetched");
  });
});
