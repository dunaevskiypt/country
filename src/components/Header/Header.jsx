import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { Container } from "./Container";
import { useSearchParams } from "react-router-dom";

const HeaderElement = styled.header`
  box-shadow: var(--shadow);
  background-color: (--colors-ui-base);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;
const Title = styled.a.attrs({ href: "/" })`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var (--fw-bold);
`;
const ThemeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  /* font-weight: var (--fw-bold); */
  text-transform: capitalize;
`;

function Header() {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <HeaderElement>
      <Container>
        <Wrapper>
          <Title>Where is the world</Title>
          <ThemeSwitcher onClick={changeTheme}>
            {theme==='light'?(<IoMoonOutline size="14px"/>):( <IoMoon size="14px" />)}
            {" "}
            <span style={{ marginLeft: "0.75rem" }}> {theme} theme</span>
          </ThemeSwitcher>
        </Wrapper>
      </Container>
    </HeaderElement>
  );
}

export default Header;
