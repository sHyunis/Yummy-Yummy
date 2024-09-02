import React from "react";
import styled from "styled-components";

const LabelStyled = styled.label`
  padding-top: 3px;
  margin-right: 20px;
  font-weight: 600;
`;
const Label = ({ children }) => {
  return <LabelStyled>{children}</LabelStyled>;
};

export default Label;
