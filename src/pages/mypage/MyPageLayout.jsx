import { Link, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import supabase from "../../../base-camp/supabaseClient";
import { useState, useEffect } from "react";
import ProfileImage from "../../components/ProfileImage";

const MyPageLayoutContainer = styled.div`
  display: flex;
  gap: 50px;
`;

const MyPageLeftStyled = styled.div`
  position: relative;
  width: 278px;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    z-index: -1;
    width: 100%;
    transform: translate(0, -50%);
    height: calc(100% + 100px);
    background-color: var(--gray4-color);
  }
`;
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px 50px 24px;
  text-align: center;
`;
const ProfileInfo = styled.div`
  padding-top: 16px;
`;
const ProfileNickname = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;
const ProfileEmail = styled.div`
  font-size: 1.4rem;
  font-weight: 300;
  text-decoration: underline;
  color: var(--gray2-color);
`;
const ProfileIntro = styled.div`
  padding-top: 16px;
  font-size: 1.4rem;
  word-break: keep-all;
  color: var(--gray2-color);
`;
const MyPageNav = styled.ul`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  > li {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    > a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 12px 16px 24px;
      font-size: 1.6rem;
      transition: all ease 0.4s;
      .material-symbols-rounded {
        color: var(--gray3-color);
        transition: all ease 0.4s;
      }
      &:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }
    }
    &.on {
      > a {
        font-weight: 700;
        background-color: var(--beige-color);
        cursor: default;
        .material-symbols-rounded {
          color: var(--yellow-color);
        }
      }
    }
  }
`;

const MyPageRightStyled = styled.div`
  flex: 1 0 auto;
`;

export const MyPageLeft = () => {
  const [user, setUser] = useState([]);
  const [searchParams] = useSearchParams();
  const views = searchParams.get("views");

  async function getProfile() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    setUser(user);
  }

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <MyPageLeftStyled>
      <ProfileContainer>
        <ProfileImage />
        <ProfileInfo>
          <ProfileNickname>{user.user_metadata.nickname}</ProfileNickname>
          <ProfileEmail>{user.user_metadata.email}</ProfileEmail>
        </ProfileInfo>
        <ProfileIntro>
          <p>
            제가 만들라는데로 만드시면 당신도 백종원이 될수있어요
          </p>
        </ProfileIntro>
      </ProfileContainer>
      <MyPageNav>
        <li className={views == "profile" ? "on" : ""}>
          <Link to="?views=profile">
            <span>프로필 수정</span>
            <span className="material-symbols-rounded">chevron_right</span>
          </Link>
        </li>
        <li className={views == "post" ? "on" : ""}>
          <Link to="?views=post">
            <span>내가 작성한 게시글</span>
            <span className="material-symbols-rounded">chevron_right</span>
          </Link>
        </li>
        <li className={views == "comment" ? "on" : ""}>
          <Link to="?views=comment">
            <span>내가 작성한 댓글</span>
            <span className="material-symbols-rounded">chevron_right</span>
          </Link>
        </li>
      </MyPageNav>
    </MyPageLeftStyled>
  );
};

export const MyPageRight = ({ children }) => {
  return <MyPageRightStyled>{children}</MyPageRightStyled>;
};

const MyPageLayout = ({ children }) => {
  return (
    <MyPageLayoutContainer className="container">
      <MyPageLeft />
      <MyPageRight>{children}</MyPageRight>
    </MyPageLayoutContainer>
  );
};

export default MyPageLayout;
