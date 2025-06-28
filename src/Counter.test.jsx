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
  

test("decrements counter when Decrease button is clicked and does not go below 0", () => {
    render(<Counter />);
    const increaseButton = screen.getByText("Increase");
    const decreaseButton = screen.getByText("Decrease");
  
    // increase count to 2
    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);
    expect(screen.getByText("Current count: 2")).toBeInTheDocument();
  
    // decrease count to 1
    fireEvent.click(decreaseButton);
    expect(screen.getByText("Current count: 1")).toBeInTheDocument();
  
    // decrease count to 0
    fireEvent.click(decreaseButton);
    expect(screen.getByText("Current count: 0")).toBeInTheDocument();
  
    // try to decrease below 0 (should stay at 0)
    fireEvent.click(decreaseButton);
    expect(screen.getByText("Current count: 0")).toBeInTheDocument();
  });