import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 80px;
`;

const MainContainer = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default MainContainer;
