import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("renders greeting message", () => {
  render(<Greeting name="Nazanin" />);
  const textElement = screen.getByText(/Hello, Nazanin!/i);
  expect(textElement).toBeInTheDocument();
});
