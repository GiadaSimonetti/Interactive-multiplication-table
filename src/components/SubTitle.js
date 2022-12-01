import React from "react";
import styled from "styled-components";
import { device } from "./MediaQuieries";

const SubTitleH3 = styled.h3`
  color: #32cf13;
  text-align: center;
  font-size: 20px;
  @media ${device.tablet} {
    font-size: 30px;
  }
  @media ${device.laptopL} {
    font-size: 40px;
  }
`;

const SubTitle = ({ children }) => {
  return <SubTitleH3>{children}</SubTitleH3>;
};

export default SubTitle;
