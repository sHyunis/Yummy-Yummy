import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Post from "./Post";
import supabase from "../../../supabaseClient";
import { throttle } from "lodash";
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

const PostList = ({ keyword }) => {
  const countPost = parseInt((document.documentElement.scrollHeight - 450) / 385);
  const [postList, setPostList] = useState([]);
  const [postLimit, setPostLimit] = useState(countPost * 4 + 4);
  const [loadingVisibility, setLoadingVisibility] = useState(false);
  const [allPostLength, setAllPostLength] = useState(0);
  const [ascending, setAscending] = useState(false);
  const [category, setCategory] = useState("");

  useEffect(() => {
    keyword && setPostLimit(countPost * 4 + 4);
    const fetchData = async (limit) => {
      keyword || postLimit - 8 > allPostLength ? setLoadingVisibility(false) : setLoadingVisibility(true);
      try {
        let response;
        if (keyword) {
          console.log(keyword);
          response = await supabase.from("recipe_info").select("*").order("created_at", { ascending: ascending });

          const filteredData = response.data.filter((post) =>
            post.RECIPE_TITLE.replace(/\s/gi, "").includes(keyword.replace(/\s/gi, ""))
          );
          setPostList(filteredData);
        } else {
          response = category
            ? await supabase
                .from("recipe_info")
                .select("*")
                .eq("RECIPE_CTG", category)
                .order("created_at", { ascending: ascending })
                .limit(limit)
            : await supabase.from("recipe_info").select("*").order("created_at", { ascending: ascending }).limit(limit);

          setPostList(response.data);
        }
        setAllPostLength(response.data.length);
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingVisibility(false);
      }
    };

    const handleScroll = throttle(() => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      if (scrollTop + clientHeight >= scrollHeight - 1) {
        setPostLimit((prev) => prev + 8);
      }
    }, 300);

    fetchData(postLimit);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [postLimit, keyword, ascending, category]);

  return (
    <>
      <SortButtonWrap>
        <SelectBox
          onChange={(e) => {
            setPostLimit(parseInt((document.documentElement.clientHeight - 450) / 385) * 4 + 4);
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
            setPostLimit(parseInt((document.documentElement.clientHeight - 450) / 385) * 4 + 4);
            setAscending((prev) => !prev);
          }}
        >
          {ascending ? (
            <>
              <span className="material-symbols-rounded">arrow_upward</span>
              오름차순
            </>
          ) : (
            <>
              <span className="material-symbols-rounded">arrow_downward</span>
              내림차순
            </>
          )}
        </Button>
      </SortButtonWrap>
      <PostListStyled>
        {postList.map((post) => (
          <li key={post.RECIPE_ID}>
            <Post id={post.RECIPE_ID} img={post.RECIPE_IMG} title={post.RECIPE_TITLE} description={post.RECIPE_DESCR} />
          </li>
        ))}
      </PostListStyled>

      <LoadingIcon isLoading={loadingVisibility} />
    </>
  );
};

export default PostList;
