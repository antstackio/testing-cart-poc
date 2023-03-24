import React from "react";

import { render, screen } from "@testing-library/react";
import AdditionThree from "./AdditionThree";

describe("AdditionTwoPage", () => {
  it("should render", () => {
    render(<AdditionThree />);
    screen.getByText("Add Three Numbers");
  });
});
