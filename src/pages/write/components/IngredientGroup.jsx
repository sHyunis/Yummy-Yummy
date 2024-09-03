import React, { useContext } from "react";
import Input from "./Input";
import styled from "styled-components";
import { WriteContext } from "../../../contexts/WriteContext";

const GroupStyle = styled.div`
  display: flex;
  width: 450px;
  height: 50px;
  justify-content: space-between;
  padding: 10px 0;
`;

const InputSize = styled.div`
  width: 200px;
  height: 40px;
  display: flex;
`;

const IngredientGroup = ({ index }) => {
  const { removeIngGroup, ingInfoChange } = useContext(WriteContext);
  return (
    <>
      <GroupStyle>
        <InputSize>
          <Input place="예) 당근" type="ING_NAME" index={index} onChange={ingInfoChange} table="ing" />
        </InputSize>
        <InputSize>
          <Input place="예) 1개, 30g 등" type="ING_VOL" index={index} onChange={ingInfoChange} table="ing" />
        </InputSize>
        <p onClick={() => removeIngGroup(index)} style={{ cursor: "pointer", opacity: 0.5 }}>
          x
        </p>
      </GroupStyle>
    </>
  );
};

export default IngredientGroup;
