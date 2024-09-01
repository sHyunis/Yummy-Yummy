import React, { useEffect, useState } from "react";
import styled from "styled-components";
import supabase from "../../../base-camp/supabaseClient";
import PostCard from "../../components/PostCard";
import { useInView } from "react-intersection-observer";

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
`;
const PostListLi = styled.li`
  overflow: hidden;
`;

const Loading = styled.div`
  display: ${({ $isLoading }) => ($isLoading ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  margin: 24px auto;
  text-align: center;
  > .material-symbols-rounded {
    font-size: 5rem;
    color: var(--gray2-color);
    animation: loading-icon linear infinite 0.8s;
  }
  @keyframes loading-icon {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const PostList = () => {
  const [postList, setPostList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const limit = 8;

  const getPostList = async (page) => {
    const {
      data: { user }
    } = await supabase.auth.getUser();

    const { data } = await supabase
      .from("recipe_info")
      .select("*")
      .eq("USER_ID", user.id)
      // range() : 시작 인덱스, 끝 인덱스 지정해서 데이터 가져옴
      .range((page - 1) * limit, page * limit - 1);

    return data;
  };

  const loadMorePosts = async () => {
    setLoading(true); // 데이터를 불러오는 동안 로딩 상태를 true로 설정
    const newPosts = await getPostList(page); // 새로운 게시글 가져옴
    setPostList((prevPosts) => [...prevPosts, ...newPosts]); // 기존 게시글 목록(prevPosts)에 새로 가져온 게시글(newPosts)을 추가
    setLoading(false); // 데이터를 다 불러온 후 로딩 상태를 false로 설정
    setPage((prevPage) => prevPage + 1); // 현재 페이지 번호 1 증가
  };

  useEffect(() => {
    // 초기 데이터 로드
    loadMorePosts();
  }, []);

  // 무한 스크롤
  const { ref, inView } = useInView({
    threshold: 0
  });

  useEffect(() => {
    // 가시성 감지
    if (inView && !loading) {
      loadMorePosts();
      console.log("감지");
    }
  }, [inView, loading, loadMorePosts]);

  return (
    <>
      {postList.length === 0 ? (
        <EmptyText>작성한 게시글이 없습니다.</EmptyText>
      ) : (
        <>
          <PostListStyled>
            {postList.map((post) => (
              <PostListLi key={post.RECIPE_ID}>
                <PostCard post={post} />
              </PostListLi>
            ))}
          </PostListStyled>
          <Loading $isLoading={loading}>
            <span className="material-symbols-rounded">progress_activity</span>
          </Loading>
          <div ref={ref}></div>
        </>
      )}
    </>
  );
};

export default PostList;
