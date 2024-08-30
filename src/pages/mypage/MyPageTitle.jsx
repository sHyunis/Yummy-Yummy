import styled from "styled-components";

const MyPageTitleStyled = styled.div`
  padding-bottom: 24px;
  font-size: 3rem;
  font-weight: 700;
`;

const MyPageTitle = ({ children }) => {
  return <MyPageTitleStyled>{children}</MyPageTitleStyled>;
};

export default MyPageTitle;
