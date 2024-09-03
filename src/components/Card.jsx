import React from "react";
import styled from "styled-components";

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  background-color: var(--gray4-color);
  border-radius: var(--border-radius);
  object-fit: cover;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 16px;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;

const Description = styled.p`
  color: var(--gray2-color);
  font-size: 1.4rem;
  text-overflow: ellipsis;
  text-align: center;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const Card = ({ src, title, description, onClick }) => {
  return (
    <CardStyled onClick={onClick}>
      <Image src={src} />
      <ContentWrap>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ContentWrap>
    </CardStyled>
  );
};

export default Card;
