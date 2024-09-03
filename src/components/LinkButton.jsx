import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = ({ to, onClick, children, height, fontsize, color }) => {
  const bgColorSwitch = (color) => {
    switch (color) {
      case "beige":
        return "var(--beige-color)";
      default:
        return "var(--green-color)";
    }
  };
  const bgHoverColorSwitch = (color) => {
    switch (color) {
      case "beige":
        return "var(--beige-hover-color)";
      default:
        return "var(--green-hover-color)";
    }
  };
  const textColorSwitch = (color) => {
    switch (color) {
      case "beige":
        return "var(--gray2-color)";
      default:
        return "#fff";
    }
  };

  return (
    <LinkButtonStyled
      type="button"
      to={to}
      onClick={onClick}
      $height={height}
      $fontsize={fontsize}
      $bgColor={bgColorSwitch(color)}
      $bgHoverColor={bgHoverColorSwitch(color)}
      $textColor={textColorSwitch(color)}
    >
      {children}
    </LinkButtonStyled>
  );
};

const LinkButtonStyled = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${(props) => (props.$height ? "height:" + props.$height : "")};
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$textColor};
  border: none;
  border-radius: var(--border-radius);
  font-size: ${(props) => (props.$fontsize ? props.$fontsize + "rem" : "1.6rem")};
  font-weight: 700;
  text-align: center;
  padding: 10px 20px;

  &:hover {
    background-color: ${(props) => props.$bgHoverColor};
  }
`;
export default Button;
