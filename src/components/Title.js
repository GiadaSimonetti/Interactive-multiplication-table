import React from "react";
import styled from "styled-components";

const TitleH1 = styled.h1`
  color: #32cf13;
  font-size: 70px;
  text-align: center;
`;

const Title = ({ children }) => {
  return <TitleH1>{children}</TitleH1>;
};

export default Title;
