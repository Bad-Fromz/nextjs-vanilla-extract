import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("components/Button", () => {
  it("renders a button components", () => {
    render(<Button variant="primary" label="Button" />);
    const button = screen.getByText("Button");
    expect(button).toBeInTheDocument();
  });
});
