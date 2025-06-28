import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("increments counter when button is clicked", () => {
  render(<Counter />);
  
  const button = screen.getByText("Increase");
  fireEvent.click(button);

  const countText = screen.getByText("Current count: 1");
  expect(countText).toBeInTheDocument();
});
