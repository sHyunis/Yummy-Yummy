import React from "react";
import styled from "styled-components";

const InputStyled = styled.input`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 12px 16px;
  font-size: 1.6rem;
  font-family: var(--font-family);
  border: 1px solid var(--gray3-color);
  border-radius: var(--border-radius);
`;

const Input = ({ type = "text", name, value, placeholder, onChange }) => {
  return (
    <InputStyled
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
