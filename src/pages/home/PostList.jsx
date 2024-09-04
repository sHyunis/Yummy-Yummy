import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Post from "./Post";
import supabase from "../../../supabaseClient";
import LoadingIcon from "../../components/LoadingIcon";
import Button from "../../components/Button";

const PostListStyled = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: var(--spacing-lg);
  row-gap: 34px;
  > li {
    overflow: hidden;
  }
`;

const SortButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
  gap: 20px;
  .material-symbols-rounded {
    margin-left: -6px;
    margin-right: 4px;
  }
`;

const SelectBox = styled.select`
  padding: 10px 20px;
  font-weight: 700;
  font-size: 1.6rem;
  border-radius: 8px;
  background-color: var(--green-color);
  color: white;
  cursor: pointer;
  transition: all ease 0.3s;
  &:hover {
    background-color: var(--green-hover-color);
  }
`;

const Option = styled.option`
  font-weight: 700;
  font-size: 1.6rem;
  cursor: pointer;
`;

const NoPostText = styled.h2`
  margin-top: 10rem;
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
`;

const PostList = ({ keyword }) => {
  const [postList, setPostList] = useState([]);
  const [loadingVisibility, setLoadingVisibility] = useState(false);
  const [ascending, setAscending] = useState(false);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const observerRef = useRef(null);
  const [existPost, setExistPost] = useState(true);

  const lastPostElementRef = useCallback(
    (node) => {
      if (loadingVisibility) return;
      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setPage((prevPage) => prevPage + 1);
          }
        },
        { threshold: 1.0 }
      );
      if (node) observerRef.current.observe(node);
    },
    [loadingVisibility]
  );

  useEffect(() => {
    if (!keyword) {
      setPostList([]);
      setPage(1);
    }
  }, [keyword]);

  useEffect(() => {
    if (page * 4 - 4 > postList.length && !keyword) return;
    const fetchData = async () => {
      keyword ? setLoadingVisibility(false) : setLoadingVisibility(true);
      try {
        let response;
        if (keyword) {
          response = category
            ? await supabase
                .from("recipe_info")
                .select("*")
                .eq("RECIPE_CTG", category)
                .order("created_at", { ascending: ascending })
            : await supabase.from("recipe_info").select("*").order("created_at", { ascending: ascending });

          const filteredData = response.data.filter((post) =>
            post.RECIPE_TITLE.replace(/\s/gi, "").includes(keyword.replace(/\s/gi, ""))
          );
          setPostList(filteredData);
        } else {
          const from = (page - 1) * 4;
          const to = page * 4 - 1;

          response = category
            ? await supabase
                .from("recipe_info")
                .select("*")
                .eq("RECIPE_CTG", category)
                .order("created_at", { ascending: ascending })
                .range(from, to)
            : await supabase
                .from("recipe_info")
                .select("*")
                .order("created_at", { ascending: ascending })
                .range(from, to);

          setPostList((prevPosts) => [...prevPosts, ...response.data]);
          setExistPost(response.data.length > 0 ? true : false);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingVisibility(false);
      }
    };

    fetchData();
  }, [keyword, ascending, category, page]);

  return (
    <div className="container">
      <SortButtonWrap>
        <SelectBox
          onChange={(e) => {
            setPage(1);
            setPostList([]);
            setCategory(e.target.value);
          }}
        >
          <Option value="">카테고리(전체)</Option>
          <Option value="한식">한식</Option>
          <Option value="양식">양식</Option>
          <Option value="중식">중식</Option>
          <Option value="일식">일식</Option>
          <Option value="디저트">디저트</Option>
          <Option value=">퓨전">퓨전</Option>
        </SelectBox>
        <Button
          height="40px"
          onClick={() => {
            setPage(1);
            setPostList([]);
            setAscending((prev) => !prev);
          }}
        >
          {ascending ? (
            <>
              <span className="material-symbols-rounded">arrow_upward</span>
              예전 등록순
            </>
          ) : (
            <>
              <span className="material-symbols-rounded">arrow_downward</span>
              최신 등록순
            </>
          )}
        </Button>
      </SortButtonWrap>
      {existPost ? (
        <PostListStyled>
          {postList.map((post, index) => (
            <li key={index} ref={index === postList.length - 1 ? lastPostElementRef : null}>
              <Post
                id={post.RECIPE_ID}
                img={post.RECIPE_IMG}
                title={post.RECIPE_TITLE}
                description={post.RECIPE_DESCR}
              />
            </li>
          ))}
        </PostListStyled>
      ) : (
        <NoPostText>조건에 맞는 게시물이 없습니다!</NoPostText>
      )}

      <LoadingIcon isLoading={loadingVisibility} />
    </div>
  );
};

export default PostList;
