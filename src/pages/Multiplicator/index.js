import React, { useState } from "react";
import styled from "styled-components";
import MainContainer from "../../components/MainContainer";
import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle";
import NumberContainer from "../../components/NumberContainer";
import Number from "../../components/Number";

const Button = styled.button`
  background: ${({ isHighlighted }) => (isHighlighted ? "red" : "yellow")};
`;

const Multiplicator = () => {
  const [selected, setSelected] = useState(0);
  const MAX_NUMBER = 144;

  const handleClick = (integer) => {
    setSelected(integer);
    console.log(integer);
  };

  const isDivisible = (i, clickedNumber) => {
    return i % clickedNumber === 0;
  };

  return (
    <MainContainer data-testid="multiplicator">
      <Title>Let's Learn Multiplication</Title>
      <SubTitle>Click on a number to see its multiplications 👆</SubTitle>
      <NumberContainer>
        {[...Array(MAX_NUMBER)].map((x, i) => (
          <Number
            isHighlighted={isDivisible(i + 1, selected)}
            onClick={() => handleClick(i + 1)}
            key={i}
          >
            {" "}
            {i + 1}
          </Number>
        ))}
      </NumberContainer>
    </MainContainer>
  );
};

export default Multiplicator;
