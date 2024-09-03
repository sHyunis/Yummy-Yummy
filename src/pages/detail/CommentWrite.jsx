import React, { useEffect, useRef, useState } from "react";
import supabase from "../../../base-camp/supabaseClient";
import Swal from "sweetalert2";
import { CommentWriteDiv, CommentTextarea, Button, Form } from "./detail.styled";
import { useNavigate } from "react-router-dom";

const CommentWrite = ({ recipeId, onCommentAdded, initialComment, parentCommentId }) => {
  const [comment, setComment] = useState(initialComment ? initialComment.CMT_CONT : "");
  const [userId, setUserId] = useState(null);
  const textareaRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUserId(data.user?.id);
    };

    getUser();
  }, []);

  useEffect(() => {
    if (initialComment) {
      setComment(initialComment.CMT_CONT);
    }
  }, [initialComment]);

  const handleComment = async (e) => {
    e.preventDefault();

    if (!userId) {
      Swal.fire({
        icon: "error",
        title: "로그인 후 댓글 작성이 가능합니다.",
        showCancelButton: true,
        confirmButtonColor: `var(--yellow-color)`,
        cancelButtonColor: `var(--gray3-color)`,
        confirmButtonText: "로그인 하러가기",
        cancelButtonText: "취소",
        customClass: {
          popup: "no-global-styles"
        }
      }).then((result) => {
        if (result.isConfirmed) {
          navigate(`/sign-in`);
        }
      });
    } else if (comment.length <= 0) {
      Swal.fire({
        text: "댓글을 입력해주세요!",
        customClass: {
          popup: "no-global-styles"
        }
      }).then(() => {
        textareaRef.current.focus();
      });
    } else {
      try {
        if (initialComment) {
          if (initialComment.CMT_CMT_ID) {
            // 대댓글 수정
            const { error } = await supabase
              .from("recipe_cmt_cmt")
              .update({ CMT_CONT: comment })
              .eq("CMT_CMT_ID", initialComment.CMT_CMT_ID);
            if (error) throw error;
            Swal.fire({
              icon: "success",
              text: "대댓글이 수정되었습니다.",
              customClass: {
                popup: "no-global-styles"
              }
            });
          } else {
            // 댓글 수정
            const { error } = await supabase
              .from("recipe_cmt")
              .update({ CMT_CONT: comment })
              .eq("CMT_ID", initialComment.CMT_ID);
            if (error) throw error;
            Swal.fire({
              icon: "success",
              text: "댓글이 수정되었습니다.",
              customClass: {
                popup: "no-global-styles"
              }
            });
          }
        } else if (parentCommentId) {
          // 대댓글 작성
          const { error } = await supabase
            .from("recipe_cmt_cmt")
            .insert([{ CMT_CONT: comment, RECIPE_ID: recipeId, USER_ID: userId, CMT_ID: parentCommentId }]);
          if (error) throw error;
          Swal.fire({
            icon: "success",
            text: "대댓글이 작성되었습니다.",
            customClass: {
              popup: "no-global-styles"
            }
          });
        } else {
          // 댓글 작성
          const { error } = await supabase
            .from("recipe_cmt")
            .insert([{ CMT_CONT: comment, RECIPE_ID: recipeId, USER_ID: userId }]);
          if (error) throw error;
          Swal.fire({
            icon: "success",
            text: "댓글이 작성되었습니다.",
            customClass: {
              popup: "no-global-styles"
            }
          });
        }
        setComment("");
        onCommentAdded();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <CommentWriteDiv>
      <Form onSubmit={handleComment}>
        <CommentTextarea
          ref={textareaRef}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="댓글을 입력하세요"
          rows="4"
        />
        <Button type="submit">{initialComment ? "수정" : "작성"}</Button>
      </Form>
    </CommentWriteDiv>
  );
};

export default CommentWrite;
