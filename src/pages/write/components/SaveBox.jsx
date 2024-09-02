import React, { useContext } from "react";
import Button from "../../../components/Button";
import styled from "styled-components";
import { WriteContext } from "../../../contexts/WriteContext";

const ButtonSize = styled.div`
  margin: 0 auto;
`;

const SaveBox = () => {
  const { saveRecipe } = useContext(WriteContext);
  return (
    <>
      {" "}
      <ButtonSize>
        <Button fontsize="2" onClick={saveRecipe}>
          저장하기
        </Button>
      </ButtonSize>
      ;
    </>
  );
};

export default SaveBox;
