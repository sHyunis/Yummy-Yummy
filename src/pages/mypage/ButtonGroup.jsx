import styled from "styled-components";

const ButtonGroupStyled = styled.div`
  display: flex;
  justify-content: end;
  gap: var(--spacing);
  margin-top: 40px;
`;

const ButtonGroup = ({ children }) => {
  return <ButtonGroupStyled>{children}</ButtonGroupStyled>;
};

export default ButtonGroup;
