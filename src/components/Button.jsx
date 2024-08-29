import React from "react";
import styled from "styled-components";

const Button = ({ onClick, children, fontsize }) => {
  return (
    <ButtonStyled type="button" onClick={onClick} $fontsize={fontsize}>
      {children}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  background-color: var(--green-color);
  color: white;
  border: none;
  border-radius: var(--border-radius-sm);
  font-size: ${(props) => props.$fontsize || "1rem"};
  font-weight: 700;
  text-align: center;
  padding: 10px 20px;

  &:hover {
    background-color: var(--green-hover-color);
  }
`;
export default Button;
