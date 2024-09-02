import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import supabase from "../../../base-camp/supabaseClient";

const CommentWrite = ({ recipeId, onCommentAdded }) => {
  const [comment, setComment] = useState("");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUserId(data.user?.id);
    };

    getUser();
  }, []);

  const handleComment = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("recipe_cmt")
      .insert([{ RECIPE_ID: recipeId, CMT_CONT: comment, USER_ID: userId }]);
    if (error) {
      console.log(error);
    } else {
      alert("댓글등록이 완료하였습니다.");
      setComment("");
      if (onCommentAdded) onCommentAdded();
    }
  };

  return (
    <>
      <Form onSubmit={handleComment}>
        <CommentTextarea
          placeholder="댓글을 작성해 주세요..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></CommentTextarea>
        <Button type="submit">등록</Button>
      </Form>
    </>
  );
};

const Form = styled.form`
  display: flex;
  align-items: center;
`;

const CommentTextarea = styled.textarea`
  width: 880px;
  height: auto;
  padding: 10px;

  min-height: 160px;
  resize: none;
  white-space: normal;
  overflow-wrap: break-word;
  box-sizing: border-box;
  background-color: var(--beige-color);
  border: none;
  border-radius: 30px;
  font-size: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const Button = styled.button`
  width: 150px;
  height: 155px;
  text-align: center;
  font-size: 20px;
  background-color: var(--green-color);
  border-radius: 30px;
  margin-left: 25px;
  color: var(--beige-color);
  cursor: pointer;
`;

export default CommentWrite;
