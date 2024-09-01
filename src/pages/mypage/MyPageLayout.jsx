import styled from "styled-components";
import MyPageRight from "./MyPageRight";
import MyPageLeft from "./MyPageLeft";

// MyPageLayout
const MyPageLayoutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
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