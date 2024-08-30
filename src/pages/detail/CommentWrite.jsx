import React from "react";
import styled from "styled-components";

const CommentWrite = () => {
  return (
    <>
      <Form>
        <CommentTextarea placeholder="댓글을 작성해 주세요..."></CommentTextarea>
        <Button type="button">등록</Button>
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
