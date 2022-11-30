import React from 'react';
import { render, screen } from "@testing-library/react";
import Multiplication from './'

describe("Multiplication component", () => {
    test("should render", () => {
        const { queryByTestId } = render(
        <Multiplication />
      );
      expect(queryByTestId("multiplication")).toBeTruthy();
    });
    test('should render buttons', () => {
        render(<Multiplication />)
        const button = screen.getAllByRole('button')
    })
    test.todo('click even')
  });
  