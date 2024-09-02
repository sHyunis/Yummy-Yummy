import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import supabase from "../../../base-camp/supabaseClient";
import CommentCard from "./CommentCard";
import { useInView } from "react-intersection-observer";
import LoadingIcon from "../../components/LoadingIcon";

const EmptyText = styled.div`
  width: 100%;
  padding: 24px;
  background-color: var(--beige-color);
  border-radius: var(--border-radius);
`;

const CommentListStyled = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
`;
const CommentListLi = styled.li`
  overflow: hidden;
`;

const limit = 4;

const CommentList = () => {
  const [commentList, setCommentList] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // 로딩 여부 확인
  const [isHasMore, setIsHasMore] = useState(true); // 로딩할 데이터가 더 있는지 확인
  const [page, setPage] = useState(1);

  const getCommentList = async (page) => {
    const {
      data: { user }
    } = await supabase.auth.getUser();

    const { data: cmtData, error: cmtError } = await supabase
      .from("recipe_cmt")
      .select("*")
      .eq("USER_ID", user.id)
      .order("created_at", { ascending: false });

    if (cmtError) {
      console.error("Error:", cmtError);
      return;
    }

    const { data: cmtCmtData, error: cmtCmtError } = await supabase
      .from("recipe_cmt_cmt")
      .select("*")
      .eq("USER_ID", user.id)
      .order("created_at", { ascending: false });

    if (cmtCmtError) {
      console.error("Error:", cmtCmtError);
      return;
    }

    const latestCmt = [...cmtData, ...cmtCmtData]
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      .slice((page - 1) * limit, page * limit);

    if (latestCmt.length < limit) {
      setIsHasMore(false);
    }

    return latestCmt;
  };

  const loadMoreCommentList = useCallback(async () => {
    if (isLoading || !isHasMore) return; // 로딩 중, 더 이상 로딩할 데이터가 없으면 종료

    setIsLoading(true); // 로딩 시작
    const newPosts = await getCommentList(page); // 새로운 댓글 가져옴
    setCommentList((prevPosts) => [...prevPosts, ...newPosts]);
    setIsLoading(false); // 로딩 완료
    setPage((prevPage) => prevPage + 1); // 페이지 번호 증가
  }, [isLoading, isHasMore, page]);

  useEffect(() => {
    loadMoreCommentList(); // 처음 렌더링 로드
  }, []);

  // 무한 스크롤
  const { ref, inView } = useInView({
    threshold: 0
  });

  useEffect(() => {
    // 무한 스크롤 가시성 감지
    if (inView && !isLoading) {
      loadMoreCommentList();
    }
  }, [inView, isLoading, loadMoreCommentList]);

  return (
    <>
      {commentList.length === 0 ? (
        <EmptyText>작성한 댓글이 없습니다.</EmptyText>
      ) : (
        <>
          <CommentListStyled>
            {commentList.map((comment) => (
              <CommentListLi key={comment.CMT_CMT_ID ? comment.CMT_CMT_ID : comment.CMT_ID}>
                <CommentCard comment={comment} />
              </CommentListLi>
            ))}
          </CommentListStyled>
          <LoadingIcon isLoading={isLoading} />
          <div ref={ref}></div>
        </>
      )}
    </>
  );
};

export default CommentList;
