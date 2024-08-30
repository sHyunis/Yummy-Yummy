import React from "react";
import styled from "styled-components";

const Button = ({ onClick, children, height, fontsize }) => {
  return (
    <ButtonStyled type="button" onClick={onClick} $height={height} $fontsize={fontsize}>
      {children}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  ${(props) => (props.$height ? "height:" + props.$height : "")};
  background-color: var(--green-color);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  font-size: ${(props) =>
    props.$fontsize ? props.$fontsize + "rem" : "1.6rem"};
  font-weight: 700;
  text-align: center;
  padding: 10px 20px;

  &:hover {
    background-color: var(--green-hover-color);
  }
`;
export default Button;
