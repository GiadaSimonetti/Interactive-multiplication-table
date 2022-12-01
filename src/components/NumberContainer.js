import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-row: 1fr 1fr 1fr;
  row-gap: 15px;
  justify-content: center;
  align-items: center;
`;

const NumberContainer = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default NumberContainer;
