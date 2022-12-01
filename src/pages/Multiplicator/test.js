import React from "react";
import { render, screen } from "@testing-library/react";
import Multiplicator from "./";

const mockNumberArray = [...Array(10)];

describe("Multiplicator component", () => {
  test("should render", () => {
    const { queryByTestId } = render(<Multiplicator />);
    expect(queryByTestId("multiplicator")).toBeTruthy();
  });
  test("should render buttons", () => {
    render(<Multiplicator />);
    const button = screen.getAllByRole("button");
  });
});
