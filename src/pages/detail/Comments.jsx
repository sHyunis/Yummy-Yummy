import { useEffect, useState } from "react";
import supabase from "../../../supabaseClient";
import Button from "../../components/Button";
import Swal from "sweetalert2";
import CommentWrite from "./CommentWrite";
import LoadingIcon from "../../components/LoadingIcon";
import {
  ButtonDiv,
  CommentDiv,
  CommentsMainDiv,
  CommentWriteNickName,
  CommentWriteNickNameDiv,
  PageButton,
  PaginationDiv,
  RepliesCommentDiv,
  RepliesWriteContent,
  RepliesWriteDiv,
  RepliesWriteImg,
  RepliesWriteImgDiv,
  RepliesWriteNickName,
  ReplyDiv,
  StyledH2,
  WriteContent,
  WriteImg,
  WriteImgDiv
} from "./detail.styled";

const Comments = ({ recipeId }) => {
  const [comments, setComments] = useState({ comments: [], replies: [] });
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage] = useState(5);
  const [userId, setUserId] = useState(null);
  const [editingComment, setEditingComment] = useState(null);
  const [replyToComment, setReplyToComment] = useState(null);

  const fetchData = async () => {
    setLoading(true);

    // 댓글 가져오기
    const { data: commentsData, error: commentsError } = await supabase
      .from("recipe_cmt")
      .select(`CMT_ID, CMT_CONT, USER_ID, created_at, user_info (NICKNAME, USER_IMG_URL)`)
      .eq("RECIPE_ID", recipeId)
      .order("created_at", { ascending: false });

    if (commentsError) {
      console.error("comments error: => ", commentsError);
    } else {
      // 대댓글 가져오기
      const { data: repliesData, error: repliesError } = await supabase
        .from("recipe_cmt_cmt")
        .select(
          `
        CMT_CMT_ID, 
        CMT_CONT, 
        USER_ID, 
        created_at, 
        recipe_cmt (CMT_ID, created_at, CMT_CONT, USER_ID),
        user_info (NICKNAME, USER_IMG_URL)
      `
        )
        .eq("RECIPE_ID", recipeId)
        .order("created_at", { ascending: false });

      if (repliesError) {
        console.error("replies error: => ", repliesError);
      } else {
        // 댓글과 대댓글을 상태에 저장
        setComments({
          comments: commentsData || [],
          replies: repliesData || []
        });
      }
    }
    // console.log(comments);

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    // console.log(comments);
  }, [recipeId]);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUserId(data.user?.id);
    };

    // console.log(comments);

    getUser();
  }, []);

  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.comments.slice(indexOfFirstComment, indexOfLastComment);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(comments.comments.length / commentsPerPage);

  const handleUpdateComment = (comment) => {
    setEditingComment(comment);
    setReplyToComment(null);
  };

  const handleCommentAdded = () => {
    setEditingComment(null);
    setReplyToComment(null);
    fetchData();
  };

  const handleUpdateReply = (reply) => {
    setEditingComment(reply);
    setReplyToComment(null);
  };
  const handleDeleteReply = async (replyId) => {
    const confirmDelete = window.confirm("정말로 대댓글을 삭제하시겠습니까?");
    if (!confirmDelete) return;

    try {
      // 대댓글 삭제
      const { error: deleteReplyError } = await supabase.from("recipe_cmt_cmt").delete().eq("CMT_CMT_ID", replyId);

      if (deleteReplyError) {
        throw deleteReplyError;
      }

      // 상태 업데이트
      setComments((prevComments) => ({
        comments: prevComments.comments,
        replies: prevComments.replies.filter((reply) => reply.CMT_CMT_ID !== replyId)
      }));

      Swal.fire("대댓글이 삭제되었습니다.");
    } catch (error) {
      console.error("대댓글 삭제 오류:", error);
    }
  };

  const handleDeleteComment = async (commentId) => {
    const confirmDelete = window.confirm("정말로 댓글을 삭제하시겠습니까?");
    if (!confirmDelete) return;

    try {
      // 1. 댓글에 달린 모든 대댓글 삭제
      const { error: deleteRepliesError } = await supabase.from("recipe_cmt_cmt").delete().eq("CMT_ID", commentId);

      if (deleteRepliesError) {
        throw deleteRepliesError;
      }

      // 2. 댓글 삭제
      const { error: deleteCommentError } = await supabase.from("recipe_cmt").delete().eq("CMT_ID", commentId);

      if (deleteCommentError) {
        throw deleteCommentError;
      }

      // 상태 업데이트
      setComments((prevComments) => ({
        comments: prevComments.comments.filter((comment) => comment.CMT_ID !== commentId),
        replies: prevComments.replies.filter((reply) => reply.recipe_cmt.CMT_ID !== commentId)
      }));

      Swal.fire("댓글이 삭제되었습니다.");
    } catch (error) {
      console.error("댓글 삭제 오류:", error);
    }
  };

  const handleAddComment = (parentCommentId) => {
    setReplyToComment(parentCommentId);
    setEditingComment(null);
  };

  const renderComments = (comments, replies) => {
    return comments.map((comment) => (
      <div key={comment.CMT_ID}>
        <CommentDiv>
          <WriteImgDiv>
            <WriteImg src={comment.user_info.USER_IMG_URL} width="100px" height="94px" alt="댓글작성자" />
          </WriteImgDiv>
          <CommentWriteNickNameDiv>
            <CommentWriteNickName>
              {comment.user_info.NICKNAME}
              <ButtonDiv>
                {comment.USER_ID === userId && (
                  <>
                    <Button onClick={() => handleUpdateComment(comment)}>수정</Button>
                    <Button onClick={() => handleDeleteComment(comment.CMT_ID)}>삭제</Button>
                  </>
                )}
                {userId && <Button onClick={() => handleAddComment(comment.CMT_ID)}>댓글</Button>}
              </ButtonDiv>
            </CommentWriteNickName>
            <WriteContent>{comment.CMT_CONT}</WriteContent>
          </CommentWriteNickNameDiv>
        </CommentDiv>

        {/* 댓글 아래 대댓글 입력 */}
        {replyToComment === comment.CMT_ID && (
          <CommentWrite recipeId={recipeId} onCommentAdded={handleCommentAdded} parentCommentId={replyToComment} />
        )}
        {editingComment?.CMT_ID === comment.CMT_ID && (
          <CommentWrite
            recipeId={recipeId}
            onCommentAdded={handleCommentAdded}
            initialComment={editingComment}
            parentCommentId={null}
          />
        )}

        {(replies || [])
          .filter((reply) => reply.recipe_cmt.CMT_ID === comment.CMT_ID)
          .map((reply) => (
            <ReplyDiv key={reply.CMT_CMT_ID}>
              <RepliesCommentDiv>
                <RepliesWriteImgDiv>
                  <RepliesWriteImg src={reply.user_info.USER_IMG_URL} alt="댓글작성자" />
                </RepliesWriteImgDiv>
                <RepliesWriteDiv>
                  <RepliesWriteNickName>
                    {reply.user_info.NICKNAME}
                    <ButtonDiv>
                      {reply.USER_ID === userId && (
                        <>
                          <Button onClick={() => handleUpdateReply(reply)}>수정</Button>
                          <Button onClick={() => handleDeleteReply(reply.CMT_CMT_ID)}>삭제</Button>
                        </>
                      )}
                    </ButtonDiv>
                  </RepliesWriteNickName>
                  <RepliesWriteContent>{reply.CMT_CONT}</RepliesWriteContent>
                </RepliesWriteDiv>
              </RepliesCommentDiv>

              {/* 대댓글 수정*/}
              {editingComment?.CMT_CMT_ID === reply.CMT_CMT_ID && (
                <CommentWrite
                  recipeId={recipeId}
                  onCommentAdded={handleCommentAdded}
                  initialComment={editingComment}
                  parentCommentId={reply.recipe_cmt.CMT_ID}
                />
              )}
            </ReplyDiv>
          ))}
      </div>
    ));
  };

  if (loading) return <LoadingIcon isLoading={loading} />;

  return (
    <CommentsMainDiv>
      <StyledH2 align="left">댓글</StyledH2>

      {currentComments.length > 0 ? (
        <>
          {renderComments(currentComments, comments.replies)}
          <PaginationDiv>
            {[...Array(totalPages)].map((_, index) => (
              <PageButton
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                $isActive={currentPage === index + 1}
              >
                {index + 1}
              </PageButton>
            ))}
          </PaginationDiv>
        </>
      ) : (
        <p>등록된 댓글이 없습니다.</p>
      )}
    </CommentsMainDiv>
  );
};

export default Comments;
