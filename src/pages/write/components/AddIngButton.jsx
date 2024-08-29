import React from "react";
import Button from "../../../components/Button";
import styled from "styled-components";

const Margin = styled.div`
  margin: 20px auto 0 auto;
  height: fit-content;
  width: fit-content;
`;

const AddIngButton = ({ onClick }) => {
  return (
    <>
      <Margin>
        <Button fontsize="1.4rem" onClick={onClick}>
          재료 추가
        </Button>
      </Margin>
    </>
  );
};

export default AddIngButton;
