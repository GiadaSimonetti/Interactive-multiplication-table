import React from "react";
import styled from "styled-components";
import { device } from "./MediaQuieries";

const TitleH1 = styled.h1`
  color: #32cf13;
  text-align: center;
  font-size: 40px;
  @media ${device.tablet} {
    font-size: 60px;
  }
  @media ${device.laptopL} {
    font-size: 70px;
  }
`;

const Title = ({ children }) => {
  return <TitleH1>{children}</TitleH1>;
};

export default Title;
