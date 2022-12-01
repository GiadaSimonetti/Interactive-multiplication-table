import React from "react";
import styled from "styled-components";
import { device } from "./MediaQuieries";

const Button = styled.button`
  padding: 0.5em 1em;
  font-size: 50px;
  color: black;
  font-family: "Roboto";
  border-radius: 25%;
  outline: none;
  cursor: pointer;
  width: 100%;
  height: 100%;
  margin: auto;
  background: ${({ isHighlighted }) =>
    isHighlighted ? "greenYellow" : "offWhite"};
  border: ${({ isHighlighted }) =>
    isHighlighted ? "3px solid #00FF00" : "1px solid #a19f9f"};
  @media ${device.tablet} {
    font-size: 75px;
  }
  @media ${device.laptopL} {
    font-size: 100px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Number = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default Number;
