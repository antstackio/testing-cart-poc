import React from "react";

import { render, screen } from "@testing-library/react";
import AdditionTwo from "./AdditionTwo";

describe("AdditionTwoPage", () => {
  it("should render", () => {
    render(<AdditionTwo />);
    screen.getByText("Add Two Numbers");
  });
});
