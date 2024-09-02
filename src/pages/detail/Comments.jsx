import styled from "styled-components";
import LodingIcon from "./lodingIcon";
import { useEffect, useState } from "react";
import supabase from "../../../base-camp/supabaseClient";

const Comments = ({ recipeId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("recipe_cmt")
        .select(
          `CMT_ID,CMT_CONT,USER_ID,created_at,user_info (NICKNAME, USER_IMG_URL)`,
        )
        .eq("RECIPE_ID", recipeId)
        .order("created_at", { ascending: false });
      if (error) {
        console.error("error: => ", error);
      } else {
        setComments(data);
      }
      setLoading(false);
    };

    fetchData();
  }, [recipeId]);
  // console.log(comments);

  if (loading) {
    return <LodingIcon />;
  }

  return (
    <CommentsMainDiv>
      <StyledH2>댓글</StyledH2>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <CommentDiv key={comment.CMT_ID}>
            <WriteImgDiv>
              <WriteImg src={comment.user_info.USER_IMG_URL} alt="댓글작성자" />
            </WriteImgDiv>
            <WriteDiv>
              <WriteNickName>{comment.user_info.NICKNAME}</WriteNickName>
              <WriteNickName>{comment.CMT_CONT}</WriteNickName>
            </WriteDiv>
          </CommentDiv>
        ))
      ) : (
        <p>등록된 댓글이 없습니다.</p>
      )}
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
