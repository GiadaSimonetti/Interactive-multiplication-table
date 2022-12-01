import React from "react";
import styled from "styled-components";
import { device } from "./MediaQuieries";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 15px;
  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 20px;
    column-gap: 20px;
  }
  @media ${device.laptopL} {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 30px;
    column-gap: 30px;
  }
`;

const NumberContainer = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default NumberContainer;
