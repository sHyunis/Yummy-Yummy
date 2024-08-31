import React, { useEffect, useState } from "react";
import styled from "styled-components";
import commentWriter from "./commentWriter.png";

const Comments = ({ recipeId }) => {
  return (
    <CommentsMainDiv>
      <StyledH2>댓글</StyledH2>
      <CommentDiv>
        <WriteImgDiv>
          <WriteImg
            src={commentWriter}
            alt="댓글작성자"
            className="chef-image"
          />
        </WriteImgDiv>
        <WriteDiv>
          <WriteNickName>백종원</WriteNickName>
          <WriteNickName>
            정말 맛있어 보여요!정말 맛있어 보여요!정말 맛있어 보여요! 정말 정말
            맛있어 보여요!정말 맛있어 보여요!정말 맛있어 보여요! 정말 정말
            맛있어 보여요!정말 맛있어 보여요!정말 맛있어 보여요! 정말 정말
            맛있어 보여요!정말 맛있어 보여요!정말 맛있어 보여요! 정말 정말
            맛있어 보여요!정말 맛있어 보여요!정말 맛있어 보여요! 정말
          </WriteNickName>
        </WriteDiv>
      </CommentDiv>
      <CommentDiv>
        <WriteImgDiv>
          <WriteImg
            src={commentWriter}
            alt="댓글작성자"
            className="chef-image"
          />
        </WriteImgDiv>
        <WriteDiv>
          <WriteNickName>백종원</WriteNickName>
          <WriteNickName>정말 맛있어 보여요!</WriteNickName>
        </WriteDiv>
      </CommentDiv>
    </CommentsMainDiv>
  );
};

const WriteDiv = styled.div`
  padding: 10px;
  width: auto;
  min-width: 500px;
  height: auto;
`;

const WriteNickName = styled.p`
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  padding: 5px;
  width: auto;
  min-width: 500px;
  height: auto;
`;

const StyledH2 = styled.h2`
  font-size: 30px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 10px;
  margin-left: 60px;
  margin-top: 10px;
`;

const CommentsMainDiv = styled.main`
  width: var(--container-width);
  justify-content: left;
`;

const CommentDiv = styled.div`
  margin-left: 60px;
  margin-bottom: 12px;
  display: grid;
  grid-template-columns: 200px 1fr;
  width: auto;
  min-width: 700px;
  height: auto;
  min-height: 100px;
  justify-content: center;
  border-radius: 30px;
  background-color: #f6eed7;
`;

const WriteImgDiv = styled.div`
  padding: 10px;
  width: auto;
  height: auto;
  text-align: center;
  border-radius: 50%;
`;

const WriteImg = styled.img`
  width: 100px;
  height: auto;
  border-radius: 50%;
`;
export default Comments;
