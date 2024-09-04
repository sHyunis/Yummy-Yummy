import styled from "styled-components";
import MyPageRight from "./MyPageRight";
import MyPageLeft from "./MyPageLeft";

// MyPageLayout
const MyPageLayoutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  padding-left: 0 !important;
`;
const MyPageContainer = styled.div`
  width: 100%;
  background-color: var(--beige-color);
`;

const MyPageLayout = ({ children }) => {
  return (
    <MyPageContainer>
      <MyPageLayoutContainer className="container">
        <MyPageLeft />
        <MyPageRight>{children}</MyPageRight>
      </MyPageLayoutContainer>
    </MyPageContainer>
  );
};

export default MyPageLayout;
