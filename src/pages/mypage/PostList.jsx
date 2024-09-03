import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import supabase from "../../../supabaseClient";
import PostCard from "./PostCard";
import { useInView } from "react-intersection-observer";
import LoadingIcon from "../../components/LoadingIcon";

const EmptyText = styled.div`
  width: 100%;
  padding: 24px;
  background-color: var(--beige-color);
  border-radius: var(--border-radius);
`;

const PostListStyled = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: var(--spacing);
  row-gap: 30px;
  > li {
    overflow: hidden;
  }
`;

const limit = 8;

const PostList = () => {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // 로딩 여부 확인
  const [isHasMore, setIsHasMore] = useState(true); // 로딩할 데이터가 더 있는지 확인
  const [page, setPage] = useState(1);

  const getPostList = async (page) => {
    const {
      data: { user }
    } = await supabase.auth.getUser();

    const { data, error } = await supabase
      .from("recipe_info")
      .select("*", { count: "exact" })
      .eq("USER_ID", user.id)
      .order("created_at", { ascending: false }) // 최신순 정렬
      .range((page - 1) * limit, page * limit - 1); // 시작 인덱스, 끝 인덱스 지정해서 데이터 가져옴

    if (error) {
      console.error("Error:", error);
      return;
    }

    if (data.length < limit) {
      setIsHasMore(false);
    }

    return data;
  };

  const loadMorePostList = useCallback(async () => {
    if (isLoading || !isHasMore) return; // 로딩 중, 더 이상 로딩할 데이터가 없으면 종료

    setIsLoading(true); // 로딩 시작
    const newPosts = await getPostList(page); // 새로운 게시글 가져옴
    setPostList((prevPosts) => [...prevPosts, ...newPosts]);
    setIsLoading(false); // 로딩 완료
    setPage((prevPage) => prevPage + 1); // 페이지 번호 증가
  }, [isLoading, isHasMore, page]);

  useEffect(() => {
    loadMorePostList(); // 처음 렌더링 로드
  }, []);

  // 무한 스크롤
  const { ref, inView } = useInView({
    threshold: 0
  });

  useEffect(() => {
    // 무한 스크롤 가시성 감지
    if (inView && !isLoading) {
      loadMorePostList();
    }
  }, [inView, isLoading, loadMorePostList]);

  return (
    <>
      {postList.length === 0 ? (
        <EmptyText>작성한 게시글이 없습니다.</EmptyText>
      ) : (
        <>
          <PostListStyled>
            {postList.map((post) => (
              <li key={post.RECIPE_ID}>
                <PostCard post={post} />
              </li>
            ))}
          </PostListStyled>
          <LoadingIcon isLoading={isLoading} />
          <div ref={ref}></div>
        </>
      )}
    </>
  );
};

export default PostList;
