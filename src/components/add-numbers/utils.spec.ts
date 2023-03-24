import { add } from "./utils";

describe("add function", () => {
  test("tests the addNumbers function", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("tests the addNumbers function with 3 numbers", () => {
    expect(add(1, 2, 1)).toBe(4);
  });
});
