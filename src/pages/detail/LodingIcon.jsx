import React from "react";
import loadingIcon from "../../../public/images/loading.png";
import styled from "styled-components";

const LodingIcon = () => {
  return (
    <div>
      <Lodingimg src={loadingIcon} />
    </div>
  );
};
const Lodingimg = styled.img`
  width: 100px;
  height: 100px;
  text-align: center;
  align-items: center;
`;
export default LodingIcon;
