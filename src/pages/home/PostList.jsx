import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Post from "./Post";
import supabase from "../../../base-camp/supabaseClient";
import { throttle } from "lodash";
import loadingIcon from "../../../public/images/loading.png";

const Wrap = styled.div`
  margin-top: 7rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2.4rem;
  row-gap: 3rem;
  margin-bottom: 3rem;
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Loading = styled.img`
  display: ${(props) => props.$visibility};
  height: 3rem;
  width: 3rem;
`;

const PostList = ({ keyword }) => {
  const [postList, setPostList] = useState([]);
  const [postLimit, setPostLimit] = useState(8);
  const [loadingVisibility, setLoadingVisibility] = useState("none");
  const [allPostLength, setAllPostLength] = useState(0);

  useEffect(() => {
    const fetchData = async (limit) => {
      postLimit - 8 > allPostLength
        ? setLoadingVisibility("none")
        : setLoadingVisibility("block");
      try {
        let response;
        if (keyword) {
          console.log(keyword);
          response = await supabase
            .from("recipe_info")
            .select("*")
            .order("RECIPE_ID", { ascending: true });

          const filteredData = response.data.filter((post) =>
            post.RECIPE_TITLE.replace(/\s/gi, "").includes(
              keyword.replace(/\s/gi, ""),
            ),
          );
          console.log(filteredData);
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
        setLoadingVisibility("none");
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

  useEffect(() => {
    setPostLimit(8);
  }, [keyword]);

  return (
    <>
      <Wrap>
        {postList.map((post) => (
          <Post
            key={post.RECIPE_ID}
            id={post.RECIPE_ID}
            img={post.RECIPE_IMG}
            title={post.RECIPE_TITLE}
            description={post.RECIPE_DESCR}
          />
        ))}
      </Wrap>
      <LoadingWrapper>
        <Loading src={loadingIcon} $visibility={loadingVisibility} />
      </LoadingWrapper>
    </>
  );
};

export default PostList;
