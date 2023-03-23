import { render, screen } from "@testing-library/react";
import App from "../App";

describe("should render App", () => {
  it("should render App", () => {
    render(<App />);
    screen.getByText("Home");
  });
});
