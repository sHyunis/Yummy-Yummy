import React from "react";
import styled from "styled-components";

const SignButton = ({ onClick, children, backgroundColor, textColor }) => {
  return (
    <SignButtonStyled
      type="button"
      onClick={onClick}
      backgroundColor={backgroundColor}
      textColor={textColor}
    >
      {children}
    </SignButtonStyled>
  );
};

const SignButtonStyled = styled.button`
  width: 350px;
  height: 40px;

  border-radius: var(--border-radius-sm);
  font-size: 1.5rem;
  font-weight: 700;
  font-family: var(--font-family);
  background-color: ${({ backgroundColor }) => `var(${backgroundColor})`};
  color: ${({ textColor }) => textColor};
`;
export default SignButton;
