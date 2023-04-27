import styled from "styled-components";
import Select from "react-select";

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColorL: "var(--colors-ui-base)",
      color: "var(--colors-text)",
      bordeRadius: "var(--radii)",
      padding: "0.25rem",
      border: "none",
      boxShodow: "var(--shadow)",
      height: "50px",
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: "pointer",
      color: state.isSelected ? "var(--colors-bg)" : "var(--colors-text)",
      backgroundColorL: state.isSelected ? "var(--colors-bg)" : "var(--colors-ui-base)",
    }),
  },
})``;
