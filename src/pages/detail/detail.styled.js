import styled from "styled-components";

export const RepliesWriteImg = styled.img`
  width: 100px;
  height: 94px;
  border-radius: 50%;
`;
export const RepliesWriteDiv = styled.div`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #fff;
  width: 800px;
  min-width: 500px;
  height: auto;
  position: relative;
`;
export const RepliesCommentDiv = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  width: 1000px;
  height: auto;
  min-height: 100px;
  justify-content: center;
  border-radius: 30px;
  background-color: #f6eed7;
`;
export const RepliesWriteImgDiv = styled.div`
  padding: 10px;
  width: auto;
  height: auto;
  text-align: center;
  border-radius: 50%;
`;
export const RepliesWriteNickName = styled.div`
  display: flex;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  padding: 5px;
  width: auto;
  height: auto;
`;
export const RepliesWriteContent = styled.div`
  font-size: 16px;
  margin-top: 5px;
`;
export const ReplyDiv = styled.div`
  margin-left: 120px;
  margin-bottom: 12px;
  display: grid;
  width: 1000px;
  height: auto;
  min-height: 100px;
  justify-content: center;
  border-radius: 30px;
  background-color: #f6eed7;
`;
export const PageButton = styled.button`
  background-color: ${({ $isActive }) => ($isActive ? `var(--yellow-color)` : `var(--gray4-color)`)};
  border: 1px solid #ddd;
  color: ${({ $isActive }) => ($isActive ? `var(--gray4-color)` : `var(--gray1-color)`)};
  padding: 10px 20px;
  margin: 0 5px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: ${({ $isActive }) => ($isActive ? `var(--yellow-hover-color)` : "#ddd")};
  }
`;
export const ButtonDiv = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-left: 10px;
  position: absolute;
  right: 5%;
  bottom: 10%;
`;
export const PaginationDiv = styled.div`
  margin-left: 60px;
  margin-top: 20px;
  text-align: center;
`;
export const WriteDiv = styled.div`
  padding: 10px;
  text-align: center;
`;
export const WriteContent = styled.div`
  font-size: 16px;
  margin-top: 5px;
`;
export const CommentsMainDiv = styled.main`
  width: var(--container-width);
  justify-content: left;
`;
export const WriteImgDiv = styled.div`
  padding: 10px;
  width: auto;
  height: auto;
  text-align: center;
  border-radius: 50%;
`;
export const CommentDiv = styled.div`
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
  position: relative;
`;
export const StyledH2 = styled.h2`
  font-size: 30px;
  font-weight: bold;
  text-align: ${(props) => props.align || "center"};
  margin-bottom: ${(props) => (props.align === "left" ? "10px" : "0")};
  margin-left: ${(props) => (props.align === "left" ? "60px" : "0")};
  margin-top: ${(props) => (props.align === "left" ? "10px" : "0")};
`;
export const WriteNickName = styled.p`
  text-align: left;
  font-size: 35px;
  font-weight: bold;
  padding: 10px;
`;
export const CommentWriteNickName = styled.div`
  display: flex;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  padding: 5px;
  width: auto;
  height: auto;
`;
export const Introduction = styled.p`
  text-align: left;
  font-size: 20px;
  padding: 10px;
`;

export const WriteImg = styled.img`
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "94px"};
  border-radius: 50%;
`;

export const StDetailFootMainDiv = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StDetailFootImage = styled.img`
  max-width: auto;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

export const StDetailFootText = styled.p`
  font-family: var(--font-family);
  font-weight: 500;
  margin-top: 16px;
  color: #333;
  font-size: 16px;
`;

export const FoodHeader = styled.header`
  width: var(--container-width);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FoodCategory = styled.p`
  font-family: var(--font-family);
  width: 170px;
  height: 35px;
  margin-top: 15px;
  margin-bottom: 10px;
  flex-shrink: 0;
  border-radius: var(--border-radius);
  background-color: var(--green-color);
  color: white;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2.6px;
  align-content: center;
`;

export const FoodTitleH1 = styled.h1`
  font-family: var(--font-family);
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 56px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: var(--container-width);
  margin: 20px;
`;

export const RecipeFlowPTag = styled.p`
  margin-bottom: 15px;
`;

export const StIngredientDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: auto;
`;

export const LineDiv = styled.div`
  padding: 5px;
  border-bottom: 2px solid var(--yellow-color);
  margin-bottom: 20px;
`;

export const IngredientDiv = styled.div`
  padding: 10px;
  text-align: left;
`;

export const StRecipeContentSection = styled.div`
  width: var(--container-width);
  display: grid;
  grid-template-columns: ${(props) => props.columns || "1fr 1fr"};
  gap: 20px;
  align-items: start;
`;

export const IngredientCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid var(--green-color);
  margin: 5px;
  border-radius: 5px;
`;
export const Form = styled.form`
  display: flex;
  align-items: center;
`;

export const CommentTextarea = styled.textarea`
  width: 880px;
  height: auto;
  min-height: 160px;
  resize: none;
  white-space: normal;
  overflow-wrap: break-word;
  box-sizing: border-box;
  background-color: var(--beige-color);
  border: 1px solid var(--gray2-color);
  border-radius: var(--border-radius);
  font-size: 20px;
  text-indent: 1rem;
  padding: 1rem;
`;

export const Button = styled.button`
  width: 150px;
  height: 160px;
  text-align: center;
  margin-left: 25px;
  font-size: 20px;
  background-color: var(--green-color);
  border-radius: var(--border-radius);
  color: var(--beige-color);
  cursor: pointer;
  border: none;
`;

export const CommentWriteDiv = styled.div`
  align-items: center;
  text-align: center;
  margin-left: 60px;
  margin-bottom: 20px;
  position: relative;
`;

export const CommentWriteNickNameDiv = styled.div`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #fff;
  width: 900px;
  min-width: 500px;
  height: auto;
`;

export const Container = styled.div`
  width: var(--container-width);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid var(--green-color);
  padding-bottom: 30px;
`;

export const DivisionLineDiv = styled.div`
  width: var(--container-width);
  height: 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DetailContainer = styled.div`
  width: 100%;
  background-color: var(--beige-color);
`;
