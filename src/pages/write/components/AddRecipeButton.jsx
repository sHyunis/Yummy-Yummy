import React, { useContext } from "react";
import styled from "styled-components";
import Button from "../../../components/Button";
import { WriteContext } from "../../../contexts/WriteContext";

const Margin = styled.div`
  margin: 10px auto 0 auto;
  height: fit-content;
  width: fit-content;
`;

const AddRecipeButton = () => {
  const { handleAddRecipeGroup } = useContext(WriteContext);
  return (
    <>
      <Margin>
        <Button fontsize="1.4rem" onClick={handleAddRecipeGroup} color="beige">
          순서 추가
        </Button>
      </Margin>
    </>
  );
};

export default AddRecipeButton;
