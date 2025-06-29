import { render, screen, fireEvent} from "@testing-library/react";
import NameForm from "./NameForm";
import userEvent from "@testing-library/user-event";

test("clears input after form submission", async () => {
    render(<NameForm />);   
    const input = screen.getByPlaceholderText("Enter your name");
    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();

    await userEvent.type(input, 'Nazanin');
    expect(input).toHaveValue('Nazanin');

    await userEvent.click(button);
    expect(input).toHaveValue("");
    expect(screen.getByText("Hello, Nazanin!")).toBeInTheDocument();
});
  