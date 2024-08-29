import React from "react";
import styled from "styled-components";

const SignInput = ({ placeholder, type, children }) => {
  return (
    <SignInputStyled type={type} placeholder={placeholder}>
      {children}
    </SignInputStyled>
  );
};

const SignInputStyled = styled.input`
  width: 346px;
  height: 40px;
  border: 1px solid var(--gray3-color);
  border-radius: var(--border-radius-sm);
  font-size: 1.5rem;
  font-weight: 700;
  font-family: var(--font-family);
  &::placeholder {
    text-indent: 20px;
  }
`;

export default SignInput;
