import { render, screen } from "@testing-library/react";
import { NotFoundPage } from "./404";

describe("404", () => {
  it("should render notFound Page Successfully", () => {
    render(<NotFoundPage />);
    screen.getByText("404");
  });
});
