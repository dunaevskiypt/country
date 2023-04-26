import React from "react";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    margin: 0;
    width: 280px;
  }
`;

const Input = styled.input.attrs({
  type: "search",
  placeholder: "Enter country....",
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  background-color: var(--colors-bg);
  color: var(--color-text);
`;

function Search({ search, setSearch }) {
  return (
    <InputContainer>
      <IoSearch />
      <Input value={search} onChange={() => setSearch(e.targer.value)} />
    </InputContainer>
  );
}

export default Search;
