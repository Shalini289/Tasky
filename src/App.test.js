import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the task planner", () => {
  render(<App />);
  expect(screen.getByText(/smart task planner/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /add task/i })).toBeInTheDocument();
});
