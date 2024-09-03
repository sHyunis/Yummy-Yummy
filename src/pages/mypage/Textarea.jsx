import React from "react";
import styled from "styled-components";

const TextareaStyled = styled.textarea`
  width: 100%;
  min-height: 50px;
  padding: 14px 16px;
  font-size: 1.6rem;
  font-family: var(--font-family);
  border: 1px solid var(--gray3-color);
  border-radius: var(--border-radius);
  resize: vertical;
`;

const Textarea = ({ type = "text", name, value, placeholder, rows = "4", ref, onChange }) => {
  return (
    <TextareaStyled
      type={type}
      name={name}
      value={value || ""}
      ref={ref}
      placeholder={placeholder}
      rows={rows}
      onChange={onChange}
    />
  );
};

export default Textarea;
