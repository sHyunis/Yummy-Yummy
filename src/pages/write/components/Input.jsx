import React from "react";
import styled from "styled-components";

const InputBox = styled.textarea`
  padding: 10px 15px;
  border-radius: var(--border-radius-sm);
  border: none;
  box-shadow: inset 0 0 2px rgb(0, 0, 0, 0.3);
  width: 450px;
  min-height: 25px;
  height: ${(props) => {
    return props.placeholder.length + "px";
  }};
  resize: none;
`;

const Input = ({ place }) => {
  return <InputBox placeholder={place} />;
};

export default Input;
