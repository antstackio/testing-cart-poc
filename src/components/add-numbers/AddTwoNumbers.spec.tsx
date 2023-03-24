import { render, screen } from "@testing-library/react";
import AddTwoNumbers from "./AddTwoNumbers";
import userEvent from "@testing-library/user-event";

describe("AddTwoNumbersComponent", () => {
  it("should render", () => {
    render(<AddTwoNumbers />);
    screen.getByText("Number One");
  });

  it("should display the sum of two numbers", async () => {
    const result = render(<AddTwoNumbers />);

    await userEvent.type(result.container.querySelector("#number-one")!, "2");
    await userEvent.type(result.container.querySelector("#number-two")!, "4");
    screen.getByText("6");
  });
});
