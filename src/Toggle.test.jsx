import { render, screen, fireEvent } from "@testing-library/react";
import Toggle from "./Toggle";

test("initially shows button with 'Show Message'", () => {
    render(<Toggle />);
    expect(screen.getByText("Show Message")).toBeInTheDocument();
});
  
test("displays message after clicking 'Show Message'", () => {
    render(<Toggle />);
    const button = screen.getByText("Show Message");
    fireEvent.click(button);//show
    expect(screen.getByText('This is a toggleable message!')).toBeInTheDocument();
    fireEvent.click(screen.getByText( "Hide Message" ));//hide
    
});