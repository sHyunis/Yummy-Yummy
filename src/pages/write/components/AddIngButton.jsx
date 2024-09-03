import React, { useContext } from "react";
import Button from "../../../components/Button";
import styled from "styled-components";
import { WriteContext } from "../../../contexts/WriteContext";

const Margin = styled.div`
  margin: 20px auto 0 auto;
  height: fit-content;
  width: fit-content;
`;

const AddIngButton = () => {
  const { handleAddIngGroup } = useContext(WriteContext);
  return (
    <>
      <Margin>
        <Button fontsize="1.4rem" onClick={handleAddIngGroup}>
          재료 추가
        </Button>
      </Margin>
    </>
  );
};

export default AddIngButton;
