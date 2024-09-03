import styled from "styled-components";

const TitleStyled = styled.div`
  padding-bottom: ${(props) => (props.$size === "small" ? "20px" : "30px")};
  font-size: ${(props) => (props.$size === "small" ? "2.4rem" : "3rem")};
  font-weight: 700;
`;

const Title = ({ children, size }) => {
  return <TitleStyled $size={size}>{children}</TitleStyled>;
};

export default Title;
