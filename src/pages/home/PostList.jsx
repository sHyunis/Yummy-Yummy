import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Post from "./Post";
import supabase from "../../../supabaseClient";
import { throttle } from "lodash";
import LoadingIcon from "../../components/LoadingIcon";

const Wrap = styled.div`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: var(--spacing-lg);
  row-gap: 34px;
  > li {
    overflow: hidden;
  }
`;

const SortButton = styled.button`
  height: 4rem;
  padding: 0 1.5rem;
  align-self: self-end;
  border-radius: 8px;
  font-weight: 600;
`;

const PostList = ({ keyword }) => {
  const countPost = parseInt((document.documentElement.scrollHeight - 450) / 385);
  const [postList, setPostList] = useState([]);
  const [postLimit, setPostLimit] = useState(countPost * 4 + 4);
  const [loadingVisibility, setLoadingVisibility] = useState(false);
  const [allPostLength, setAllPostLength] = useState(0);
  const [ascending, setAscending] = useState(false);

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
          response = await supabase
            .from("recipe_info")
            .select("*")
            .order("created_at", { ascending: ascending })
            .limit(limit);
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
  }, [postLimit, keyword, ascending]);

  return (
    <>
      <PostListStyled>
        <SortButton
          onClick={() => {
            setPostLimit(parseInt((document.documentElement.clientHeight - 450) / 385) * 4 + 4);
            setAscending((prev) => !prev);
          }}
        >
          정렬 : {ascending ? "오름차순" : "내림차순"}
        </SortButton>
        <Wrap>
          {postList.map((post) => (
            <li key={post.RECIPE_ID}>
              <Post
                id={post.RECIPE_ID}
                img={post.RECIPE_IMG}
                title={post.RECIPE_TITLE}
                description={post.RECIPE_DESCR}
              />
            </li>
          ))}
        </Wrap>
      </PostListStyled>
      <LoadingIcon isLoading={loadingVisibility} />
    </>
  );
};

export default PostList;
