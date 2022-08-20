import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import { container, background } from "./button.css";

import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a button components", () => {
    render(<Button variant="primary" label="Button" />);
    const button = screen.getByText("Button");
    expect(button).toBeInTheDocument();
  });
});
