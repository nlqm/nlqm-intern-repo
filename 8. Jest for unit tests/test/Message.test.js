import { render, screen } from "@testing-library/react"
import Message from "./Message"
import userEvent from "@testing-library/user-event";

test ("render the message component", () => {
    render(<Message />);

    const heading = screen.getByText(/hello mia!/i);
    expect (heading).toBeInTheDocument();
});

test ("changes message when the button is clicked", async () => {
    render(<Message />);

    const button = screen.getByRole("button", { name: /Click me!/i });
    await userEvent.click(button);

    expect(screen.getByText(/You clicked the button!/i)).toBeInTheDocument();
});