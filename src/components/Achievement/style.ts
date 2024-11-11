import styled from "styled-components";

export const Explane = styled.div<{ isMoblie: boolean }>`
  width: 500px;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.personal50};
  text-align: center;
  ${({ isMoblie }) => isMoblie && `margin : 2rem 1rem;`}
`;

export const ContentsWrap = styled.div<{ isMoblie: boolean }>`
  width: 60%;
  margin: auto;
  display: flex;
  justify-content: ${({ isMoblie }) => (isMoblie ? "center" : "space-between")};
  align-items: center;

  ${({ isMoblie }) => isMoblie && `flex-direction : column;`}

  &:nth-child(2) {
    margin-top: 12rem;
  }
`;

export const Agreement = styled.img<{ isMoblie: boolean }>`
  width: ${({ isMoblie }) => (isMoblie ? "300px" : "560px")};
  background-size: cover;
`;

export const MainWrap = styled.div`
  background-color: ${({ theme }) => theme.white10};
  padding-top: 10rem;
  padding-bottom: 20rem;
`;

export const Title = styled.div<{ isMoblie: boolean }>`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.personal50};

  ${({ isMoblie }) => (isMoblie ? `text-align: center;` : `margin-left: 20%;`)}

  margin-bottom: 7rem;
`;
