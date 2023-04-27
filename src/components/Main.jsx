import { Container } from "./Header/Container";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  padding: 2erm 0;

  @media (min-width: 767px) {
    padding: 4rem 0;
  }
`;

const Main = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default Main;
