import React from "react";
import Input from "./Input";
import styled from "styled-components";

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

const IngredientGroup = () => {
  return (
    <>
      <GroupStyle>
        <InputSize>
          <Input place="예) 당근" />
        </InputSize>
        <InputSize>
          <Input place="예) 1개, 30g 등" />
        </InputSize>
      </GroupStyle>
    </>
  );
};

export default IngredientGroup;
