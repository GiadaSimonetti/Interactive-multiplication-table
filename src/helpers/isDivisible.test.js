import { isDivisible } from "./isDivisible";

describe("isDivisible function", () => {
  test("should check if 4 id divisible by 2", () => {
    expect(isDivisible(4, 2)).toBe(true);
  });
  test("should check if 4 id divisible by 2", () => {
    expect(isDivisible(2, 4)).toBe(false);
  });
  test("should check if 4 id divisible by 2", () => {
    expect(isDivisible(144, 5)).toBe(false);
  });
});
