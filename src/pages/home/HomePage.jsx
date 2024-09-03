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
  input {
    padding-left: 48px;
    border-width: 2px;
    border-color: var(--yellow-color);
    background-color: var(--beige-color);
    transition: all ease 0.2s;
  }
`;

const SearchICon = styled.div`
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--yellow-color);
`;

const HomePage = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <SearchbarWrap>
        <Input placeholder="검색어를 입력하세요." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <SearchICon className="material-symbols-rounded">search</SearchICon>
      </SearchbarWrap>
      <PostList keyword={inputValue} />
    </div>
  );
};

export default HomePage;
