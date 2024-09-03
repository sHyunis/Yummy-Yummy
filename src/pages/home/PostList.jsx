import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Post from "./Post";
import supabase from "../../../base-camp/supabaseClient";
import { throttle } from "lodash";
import LoadingIcon from "../../components/LoadingIcon";

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

const PostList = ({ keyword }) => {
  const countPost = parseInt((document.documentElement.scrollHeight - 450) / 385);
  const [postList, setPostList] = useState([]);
  const [postLimit, setPostLimit] = useState(countPost * 4 + 4);
  const [loadingVisibility, setLoadingVisibility] = useState(false);
  const [allPostLength, setAllPostLength] = useState(0);

  useEffect(() => {
    keyword && setPostLimit(countPost * 4 + 4);
    const fetchData = async (limit) => {
      console.log("postLimit", postLimit);
      console.log("allPostLength", allPostLength);
      keyword || postLimit - 8 > allPostLength ? setLoadingVisibility(false) : setLoadingVisibility(true);
      try {
        let response;
        if (keyword) {
          console.log(keyword);
          response = await supabase.from("recipe_info").select("*").order("RECIPE_ID", { ascending: true });

          const filteredData = response.data.filter((post) =>
            post.RECIPE_TITLE.replace(/\s/gi, "").includes(keyword.replace(/\s/gi, ""))
          );
          setPostList(filteredData);
        } else {
          response = await supabase
            .from("recipe_info")
            .select("*")
            .order("RECIPE_ID", { ascending: true })
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
  }, [postLimit, keyword, allPostLength]);

  return (
    <>
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
