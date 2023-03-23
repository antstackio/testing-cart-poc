import { Home } from "./Home";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  it("should mount component", () => {
    render(<Home />);
    screen.getByText("Home");
  });
});
