import React from "react";
import Button from "../../../components/Button";
import styled from "styled-components";

const ButtonSize = styled.div`
  margin: 0 auto;
`;

const SaveBox = () => {
  return (
    <>
      {" "}
      <ButtonSize>
        <Button fontsize="2rem">저장하기</Button>
      </ButtonSize>
      ;
    </>
  );
};

export default SaveBox;
