import React from "react";
import styled from "styled-components";

const LoadingIconStyled = styled.div`
  display: ${({ $isLoading }) => ($isLoading ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  margin: 60px auto;
  text-align: center;
  > .material-symbols-rounded {
    font-size: 5rem;
    color: var(--gray2-color);
    animation: loading-icon linear infinite 0.8s;
  }
  @keyframes loading-icon {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingIcon = ({ isLoading }) => {
  return (
    <LoadingIconStyled $isLoading={isLoading}>
      <span className="material-symbols-rounded">progress_activity</span>
    </LoadingIconStyled>
  );
};

export default LoadingIcon;
