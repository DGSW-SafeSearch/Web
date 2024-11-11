import styled, { keyframes } from "styled-components";
import DirectionImg from "../../asset/Direction.png";

export const DirectionAnime = keyframes`
    0%{margin-bottom :20px;}
    25%{margin-bottom :60px;}
    50%{margin-bottom : 20px;}
    75%{margin-bottom : 60px;}
    0%{margin-bottom : 20px;}
`;

export const Background = styled.div`
  background-color: ${({ theme }) => theme.white10};
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -3;
`;

export const MainWrap = styled.div<{ isMoblie: boolean }>`
  width: 100%;
  height: 100vh;
  margin-bottom: 100px;
  overflow: hidden;
  display: flex;
  justify-content: ${({ isMoblie }) => (isMoblie ? "center" : "space-between")};
  align-items: center;
`;
export const Logo = styled.img<{ isMoblie: boolean }>`
  background-size: cover;
  height: ${({ isMoblie }) => (isMoblie ? "48px" : "62px")};
  margin-bottom: 1rem;
`;

export const Introduce = styled.p<{ isMoblie: boolean }>`
  font-size: ${({ isMoblie }) => (isMoblie ? "1.25rem" : "2rem")};
  font-weight: 600;
  color: ${({ theme }) => theme.personal50};
  text-align: center;
`;

export const LogoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const BtnWrap = styled.div`
  margin: 1.75rem 0;
  position: relative;
  & > div:nth-child(1) {
    margin-right: 1rem;
  }
`;
export const InfoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Business = styled.img<{ isMoblie: boolean }>`
  height: ${({ isMoblie }) => (isMoblie ? "20px" : "26px")};
  background-size: cover;
`;

export const Direction = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${DirectionImg});
  background-size: cover;
  position: absolute;
  bottom: 0;
  margin-bottom: 20px;
  animation-duration: 3s;
  animation-name: ${DirectionAnime};
  animation-iteration-count: infinite;
`;
