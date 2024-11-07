import styled from "styled-components";

export const MainWrap = styled.div`
  width: 50%;
  margin: 10rem auto;
`;

export const Title = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.personal50};
  margin-bottom: 3rem;
`;

export const FaqWrap = styled.div`
  & > div {
    margin-bottom: 3rem;
  }
`;
