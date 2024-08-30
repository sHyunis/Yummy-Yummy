import React from "react";
import styled from "styled-components";

const InputStyled = styled.textarea`
  padding: 10px 15px;
  border-radius: var(--border-radius);
  border: none;
  box-shadow: inset 0 0 3px rgb(0, 0, 0, 0.3);
  width: 100%;
  height: ${(props) => {
    const height = props.placeholder.length;
    return height > 15 ? height * 1.5 + "px" : 20 + "px";
  }};
  resize: none;
`;

const Input = ({ place }) => {
  return <InputStyled placeholder={place} />;
};

export default Input;
