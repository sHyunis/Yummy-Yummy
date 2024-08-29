import React from "react";
import styled from "styled-components";
import Button from "../../../components/Button";

const Margin = styled.div`
  margin: 0 auto;
  height: fit-content;
  width: fit-content;
`;

const AddRecipeButton = ({ onClick }) => {
  return (
    <>
      <Margin>
        <Button fontsize="1.4rem" onClick={onClick}>
          순서 추가
        </Button>
      </Margin>
    </>
  );
};

export default AddRecipeButton;
