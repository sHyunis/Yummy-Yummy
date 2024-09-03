import React from "react";
import styled from "styled-components";

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

const InputStyled = styled.input`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 10px 16px;
  font-size: 1.6rem;
  font-family: var(--font-family);
  border: 1px solid var(--gray3-color);
  border-radius: var(--border-radius);
  ${({ type }) =>
    type === "file" &&
    `
    cursor: pointer;
  `}
`;

const InputHint = styled.div`
  padding: 0 16px;
  font-size: 1.4rem;
  color: ${(props) => (props.color ? props.color : "rgba(0, 0, 0, 0.5)")};
`;

const Input = React.forwardRef(
  ({ type = "text", name, value, placeholder, accept, hint, hintColor, onChange, className }, ref) => {
    return (
      <InputWrap className={className}>
        <InputStyled
          type={type}
          name={name}
          value={value}
          ref={ref}
          placeholder={placeholder}
          accept={accept}
          onChange={onChange}
        />
        {hint !== "" ? <InputHint color={hintColor}>{hint}</InputHint> : null}
      </InputWrap>
    );
  }
);

Input.displayName = "Input";

export default Input;
