import styled from "styled-components";
import { useState } from "react";
import Input from "../../components/Input";
import PostList from "./PostList";

const SearchbarWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin: 0 auto 50px;
  gap: 20px;
  input {
    padding-left: 48px;
    border-width: 2px;
    border-color: var(--green-color);
    background-color: inherit;
    transition: all ease 0.2s;
  }
`;

const SearchICon = styled.div`
  position: absolute;
  left: 14px;
  top: 80%;
  transform: translateY(-50%);
  color: var(--green-color);
`;

const ListContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: var(--beige-color);
  padding-top: 20px;
`;
const SearchContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: var(--beige-color);
  display: flex;
  justify-content: center;
  text-align: center;
`;
const HomeH2 = styled.h2`
  font-size: 4rem;
  font-family: "Pretendard";
  color: var(--green-color);
  font-weight: 700;
`;
const HomePage = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <SearchContainer>
        <div className="container">
          <SearchbarWrap>
            <HomeH2>FIND YOUR RECIPE</HomeH2>
            <Input
              placeholder="검색어를 입력하세요."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <SearchICon className="material-symbols-rounded">search</SearchICon>
          </SearchbarWrap>
        </div>
      </SearchContainer>
      <ListContainer>
        <PostList keyword={inputValue} />
      </ListContainer>
    </>
  );
};

export default HomePage;
