import React from "react";
import styled from "styled-components";

const SubTitleH3 = styled.h3`
  color: #32cf13;
  font-size: 40px;
  text-align: center;
`;

const SubTitle = ({ children }) => {
  return <SubTitleH3>{children}</SubTitleH3>;
};

export default SubTitle;
