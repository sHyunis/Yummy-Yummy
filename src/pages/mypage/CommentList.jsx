import React, { useEffect, useState } from "react";
import styled from "styled-components";
import supabase from "../../../base-camp/supabaseClient";
import PostCard from "../../components/PostCard";
import CommentCard from "./CommentCard";

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

const CommentList = () => {
  const [commentList, setCommentList] = useState([]);

  const getCommentList = async () => {
    const {
      data: { user }
    } = await supabase.auth.getUser();

    const { data } = await supabase.from("recipe_cmt").select("*").eq("USER_ID", user.id);

    setCommentList(data);
  };

  useEffect(() => {
    getCommentList();
  }, []);

  return (
    <>
      {commentList.length === 0 ? (
        <EmptyText>작성한 댓글이 없습니다.</EmptyText>
      ) : (
        <CommentListStyled>
          {commentList.map((comment) => (
            <CommentListLi key={comment.cmt_id}>
              <CommentCard comment={comment} />
            </CommentListLi>
          ))}
        </CommentListStyled>
      )}
    </>
  );
};

export default CommentList;
