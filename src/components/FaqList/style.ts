import styled from "styled-components";

export const MainWrap = styled.div<{ isMoblie: boolean }>`
  width: ${({ isMoblie }) => (isMoblie ? "70%" : "50%")};
  margin: 10rem auto;
`;

export const Title = styled.p<{ isMoblie: boolean }>`
  font-size: ${({ isMoblie }) => (isMoblie ? "1.5rem" : "2rem")};
  font-weight: 600;
  color: ${({ theme }) => theme.personal50};
  margin-bottom: ${({ isMoblie }) => (isMoblie ? "1.5rem" : "3rem")};
`;

export const FaqWrap = styled.div<{ isMoblie: boolean }>`
  & > div {
    margin-bottom: ${({ isMoblie }) => (isMoblie ? "1rem" : "3rem")};
  }
`;
