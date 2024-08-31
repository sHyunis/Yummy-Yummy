import styled from "styled-components";
import searchIcon from "../../../public/images/search.svg";
import PostList from "./PostList";
import { useState } from "react";

const Wrap = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const SearchbarWrap = styled.div`
  position: relative;
  margin: 0 auto;
`;

const Searchbar = styled.input`
  width: 37rem;
  height: 4.8rem;
  padding: 1.2rem 4.8rem 1.2rem 2.4rem;
  border: 1px solid var(--green-color);
  border-radius: 24px;
`;

const SearchImg = styled.img`
  position: absolute;
  right: 1.2rem;
  top: 1.2rem;
`;

const HomePage = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <Wrap>
      <SearchbarWrap>
        <Searchbar
          placeholder="검색어를 입력하세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <SearchImg src={searchIcon} alt="" />
      </SearchbarWrap>
      <PostList keyword={inputValue} />
    </Wrap>
  );
};

export default HomePage;
