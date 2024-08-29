import React from "react";
import styled from "styled-components";

const ContainerStyle = styled.div`
  width: fit-content;
  height: fit-content;
`;

const Container = ({ children }) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};

export default Container;
