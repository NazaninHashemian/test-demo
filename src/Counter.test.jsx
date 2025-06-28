import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("initial counter is 0", () => {
    render(<Counter />);
    const countElement = screen.getByText("Current count: 0");
    expect(countElement).toBeInTheDocument();
  });
  
test("increments counter when button is clicked", () => {
    render(<Counter />);
    const button = screen.getByText("Increase");
    fireEvent.click(button);
    const countElement = screen.getByText("Current count: 1");
    expect(countElement).toBeInTheDocument();
});
  
test("increments counter correctly after multiple clicks", () => {
    render(<Counter />);
    const button = screen.getByText("Increase");
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    const countElement = screen.getByText("Current count: 3");
    expect(countElement).toBeInTheDocument();
});
  