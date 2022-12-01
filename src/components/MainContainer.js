import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  max-width: 70%;
`;

const MainContainer = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default MainContainer;
