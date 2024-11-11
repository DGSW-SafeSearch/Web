import styled from "styled-components";

export const MainWrap = styled.div`
  cursor: pointer;
  width: 100%;
`;

export const TitleWrap = styled.div<{ isActive: boolean; isMoblie: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ isMoblie }) => (isMoblie ? "1rem" : "2rem")};
  font-weight: 600;
  color: ${({ theme }) => theme.personal50};
  margin-bottom: ${({ isActive }) => (isActive ? "0rem" : "1rem")};
`;

export const ActiveBtn = styled.img<{ isActive: boolean; isMoblie: boolean }>`
  width: ${({ isMoblie }) => (isMoblie ? "20px" : "30px")};
  margin: 10px;
  background-size: cover;
  rotate: ${({ isActive }) => (isActive ? "180deg" : "0deg")};
  transition: 0.25s;
`;

export const TitleContext = styled.p<{ isMoblie: boolean }>`
  margin-left: 0.5rem;
  width: ${({ isMoblie }) => (isMoblie ? "100%" : "700px")};
`;

export const TitleContextWrap = styled.div`
  display: flex;
`;

export const ContextForm = styled.p<{ isMoblie: boolean }>`
  font-size: ${({ isMoblie }) => (isMoblie ? "1rem" : "1.5rem")};
  padding: 1rem;
  width: ${({ isMoblie }) => (isMoblie ? "100%" : "700px")};
  line-height: 2rem;
`;

export const SubContext = styled.p`
  margin-top: 1rem;
`;

// export const ContextForm = styled.div<{ isActive: boolean }>`
//   background-color: blue;
//   font-size: 1.5rem;
//   overflow: hidden;
//   transition: 1s;
//   height: ${({ isActive }) => (isActive ? "auto" : "0px")};
//   padding-bottom: ${({ isActive }) => (isActive ? "1rem" : "0rem")};
// `;
