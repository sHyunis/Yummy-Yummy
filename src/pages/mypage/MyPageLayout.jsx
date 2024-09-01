import styled from "styled-components";
import MyPageRight from "./MyPageRight";
import MyPageLeft from "./MyPageLeft";

// MyPageLayout
const MyPageLayoutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  padding-left: 0;
`;

const MyPageLayout = ({ children }) => {
  return (
    <MyPageLayoutContainer className="container">
      <MyPageLeft />
      <MyPageRight>{children}</MyPageRight>
    </MyPageLayoutContainer>
  );
};

export default MyPageLayout;
