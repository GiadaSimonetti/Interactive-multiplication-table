import React, { useState } from "react";
import { isDivisible } from "../../helpers/isDivisible";
import MainContainer from "../../components/MainContainer";
import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle";
import NumberContainer from "../../components/NumberContainer";
import Number from "../../components/Number";

const Multiplicator = () => {
  const [selected, setSelected] = useState(0);
  const MAX_NUMBER = 144;

  const handleClick = (integer) => {
    setSelected(integer);
  };

  return (
    <MainContainer data-testid="multiplicator">
      <Title>Let's Learn Multiplication</Title>
      <SubTitle>Click on a number to see its multiplications 👆</SubTitle>
      <NumberContainer>
        {[...Array(MAX_NUMBER)].map((x, i) => (
          <div style={{ aspectRatio: "1" }} key={i + 1}>
            <Number
              isHighlighted={isDivisible(i + 1, selected)}
              onClick={() => handleClick(i + 1)}
              key={i}
            >
              {i + 1}
            </Number>
          </div>
        ))}
      </NumberContainer>
    </MainContainer>
  );
};

export default Multiplicator;
