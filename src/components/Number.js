import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 0.5em 1em;
  margin: 10px;
  font-size: 50px;
  font-weight: lighter;
  color: black;
  border-radius: 25%;
  outline: none;
  cursor: pointer;
  height: 200px;
  width: 200px;
  background: ${({ isHighlighted }) =>
    isHighlighted ? "greenYellow" : "offWhite"};
  border: ${({ isHighlighted }) =>
    isHighlighted ? "2px solid #00FF00" : "1px solid #a19f9f"};
`;

const Number = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default Number;
