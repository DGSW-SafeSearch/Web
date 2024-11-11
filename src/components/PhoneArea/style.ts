import styled from "styled-components";

export const Context = styled.p<{ isRight?: boolean; isMoblie: boolean }>`
  font-size: ${({ isMoblie }) => (isMoblie ? "1.5rem" : "2rem")};
  font-weight: 600;
  color: ${({ theme }) => theme.personal50};
  width: 100%;
  line-height: ${({ isMoblie }) => (isMoblie ? "2rem" : "3rem")};

  ${({ isRight }) => isRight && `text-align:right;`}
`;

export const PhoneWrap = styled.div<{ isMoblie: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 3rem;
  flex-direction: column;

  height: ${({ isMoblie }) => (isMoblie ? "870px" : "1000px")};
  width: ${({ isMoblie }) => (isMoblie ? "300px" : "400px")};
`;

export const MainWrap = styled.div<{ isMoblie: boolean }>`
  width: 100%;
  display: flex;
  justify-content: ${({ isMoblie }) => (isMoblie ? "center" : "space-around")};
  ${({ isMoblie }) =>
    isMoblie &&
    `
  flex-direction : column;
  
  &>div:nth-child(1){
    margin-bottom : 200px;
  }
  `}
  align-items: center;
`;

export const Introduce = styled.p<{ isMoblie: boolean }>`
  font-size: ${({ isMoblie }) => (isMoblie ? "1rem" : "2rem")};
  font-weight: 600;
  color: ${({ theme }) => theme.personal50};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15rem;
  margin: 10rem 0;
`;
