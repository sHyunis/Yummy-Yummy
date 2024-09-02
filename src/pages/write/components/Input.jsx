import React from "react";
import styled from "styled-components";

const InputStyled = styled.textarea`
  padding: 10px 15px;
  border-radius: var(--border-radius);
  border: none;
  box-shadow: inset 0 0 3px rgb(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  resize: none;
`;

const Input = ({ place, onChange, type, index }) => {
  return <InputStyled placeholder={place} onChange={(e) => onChange(e.target.value, type, index)} />;
};

export default Input;
