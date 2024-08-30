import React, { useContext } from "react";
import Input from "./Input";
import styled from "styled-components";
import { WriteContext } from "../../../contexts/WriteContext";

const GroupStyle = styled.div`
  display: flex;
  width: 450px;
  height: 30px;
  justify-content: space-between;
  padding: 10px 0;
`;

const InputSize = styled.div`
  width: 200px;
  height: 15px;
  display: flex;
`;

const IngredientGroup = ({ index }) => {
  const { removeIngGroup } = useContext(WriteContext);
  return (
    <>
      <GroupStyle>
        <InputSize>
          <Input place="예) 당근" />
        </InputSize>
        <InputSize>
          <Input place="예) 1개, 30g 등" />
        </InputSize>
        <p
          onClick={() => removeIngGroup(index)}
          style={{ cursor: "pointer", opacity: 0.5 }}
        >
          x
        </p>
      </GroupStyle>
    </>
  );
};

export default IngredientGroup;
