import React from "react";
import styled from "styled-components";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { Container } from "./Container";

const HeaderElement = styled.header``;
const Wrapper = styled.div``;
const Title = styled.a.attrs({ href: "/" })``;
const ThemeSwitcher = styled.div``;

function Header() {
  return (
    <HeaderElement>
      <Container>
        <Wrapper>
          <Title>Where is the world</Title>
          <ThemeSwitcher>
            <IoMoon /> Light theme
          </ThemeSwitcher>
        </Wrapper>
      </Container>
    </HeaderElement>
  );
}

export default Header;
