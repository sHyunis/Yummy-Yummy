import React from "react";
import styled from "styled-components";

const SignButton = ({ onClick, children, backgroundColor, textColor }) => {
  return (
    <SignButtonStyled type="button" onClick={onClick} $backgroundColor={backgroundColor} $textColor={textColor}>
      {children}
    </SignButtonStyled>
  );
};

const SignButtonStyled = styled.button`
  width: 100%;
  height: 40px;
  padding: 10px 20px;
  border-radius: var(--border-radius-sm);
  font-size: 1.5rem;
  font-weight: 700;
  font-family: var(--font-family);
  background-color: var(${(props) => props.$backgroundColor});
  color: ${(props) => props.$textColor};
`;

export default SignButton;
